import { client } from '../../shopify-client.js';

const PRODUCT_CREATE_MUTATION = `
  mutation ProductCreate($product: ProductCreateInput!) {
    productCreate(product: $product) {
      product {
        id
        title
        descriptionHtml
        vendor
        tags
        productType
        hasOnlyDefaultVariant
        handle
        status
        seo {
          description
          title
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const productCreate = async (input) => {

    const isObject = typeof(input) === 'object' && input !== null;

    if(isObject && input) {
        const product = {
            title: input.title,
            descriptionHtml: input.descriptionHtml,
            type: input.type,
            handle: input.handle,
            status: input.status,
            vendor: input.vendor,
            tags: input.tags,
            seo: input.seo
        };

        try {
            const response = await client.request(
                PRODUCT_CREATE_MUTATION,
                { variables: { product } }
            );

            console.dir(response, { depth: null });
            const { data, errors } = response;

            if (errors) {
                const messages = errors.graphQLErrors?.map(e => e.message);
                throw new Error(messages?.join('; ') || errors.message || 'Shopify request failed');
            }

            const result = data?.productCreate;

            if (!result) throw new Error('Unexpected Shopify response');

            if (result.userErrors?.length) {
                throw new Error(
                    result.userErrors.map(e => {
                        const field = e.field?.join('.') ?? 'product';
                        return `${field}: ${e.message}`;
                    }).join('; ')
                );
            }

            if (!result.product) throw new Error('Shopify did not return the created product');

            console.log('Product created successfully:');
            console.dir(result.product, { depth: null });

            return result.product;

        } catch (error) {
            console.error('Product Creation Failed:', error.message);
            throw error;
        }
    }
}

export default productCreate;