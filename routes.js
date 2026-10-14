import productCreate from "./graphql/mutation/productCreate.js";

const routes = async (fastify, options) => {
  fastify.get("/", async (request, reply) => {
    return { Hello: "World" };
  });

  fastify.get("/products", async(request, reply) => {
    return { products: [] };
  });

  fastify.post("/productCreate", async(request, reply) => {
    try {
      const product = await productCreate(request.body);
      return reply.code(201).send({
        success:true,
        product
      })

    }
    catch(error) {
      request.log.error({ err: error }, "Product creation failed");
      return reply.code(502).send({
        success: false,
        error: error.message,
      });

    }
      
  });

};

export default routes;