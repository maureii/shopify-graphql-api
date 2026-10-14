# Shopify GraphQL API

A simple REST API for interacting with the Shopify GraphQL Admin API.

## Product Setup

### `productCreate()`

Creates a new product in Shopify using the GraphQL `productCreate` mutation.

**Supported Fields**
- `title` - Product title
- `descriptionHtml` - Product description in HTML format
- `productType` - Product type or category
- `vendor` - Product vendor or brand
- `tags` - Array of product tags
- `handle` - URL-friendly product identifier
- `seo.title` - SEO title
- `seo.description` - SEO meta description
- `status` - Product status, such as `DRAFT` or `ACTIVE`

### Sample Request Body

Send the following JSON payload to the `POST /createProduct` endpoint.

```json
{
  "title": "Test Product",
  "descriptionHtml": "Test Product Description Lorem Ipsum Dolor Col Es Lorem Ipsum Dolor Col Es Lorem Ipsum Dolor Col Es",
  "productType": "Television",
  "handle": "testing-television-samsung",
  "status": "DRAFT",
  "vendor": "SAMSUNG",
  "tags": ["TV","4k","UHD"],
  "seo": {
    "description": "SEO Test Product Description Lorem Ipsum Dolor Col Es Lorem Ipsum Dolor Col Es Lorem Ipsum Dolor Col Es",
    "title": "SEO Test Product"
  }
}
```

### Sample POST Request
#### Javascript
```javascript
 const response = await fetch("http://localhost:{port}/productCreate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
```

#### Curl
```curl
curl -X POST http://localhost:{port}/productCreate \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Product",
    "descriptionHtml": "<p>Test Product Description</p>",
    "productType": "Television",
    "handle": "testing-television-samsung",
    "status": "DRAFT",
    "vendor": "SAMSUNG",
    "tags": ["TV", "4k", "UHD"],
    "seo": {
      "description": "Test Product SEO Description",
      "title": "SEO Test Product"
    }
  }'
```