const routes = async (fastify, options) => {
  fastify.get("/", async (request, reply) => {
    return { hello: "World" };
  });

  fastify.get("/products", async(request, reply) => {
    return { products: [] };
  });
};

export default routes;