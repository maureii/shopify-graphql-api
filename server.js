import Fastify from "fastify";
import routes from "./routes.js";

const fastify = Fastify({ logger: true });

fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  }
  catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();