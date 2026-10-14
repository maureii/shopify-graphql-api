import Fastify from "fastify";
import routes from "./routes.js";
import { loadEnvFile } from "node:process";
import path from 'node:path';

const envPath = path.resolve(import.meta.dirname, '.env');
loadEnvFile(envPath);

const fastify = Fastify({ logger: true });

fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ 
      port: process.env.PORT,
      host: "0.0.0.0"
    });
  }
  catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();