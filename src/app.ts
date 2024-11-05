import fastify from "fastify";
import router from "router";
import fastifyView from "@fastify/view";
import ejs from "ejs";

const server = fastify({
  // Logger only for production
  logger: !!(process.env.NODE_ENV !== "development"),
});

// Middleware: Router
server.register(fastifyView, {
  engine: {
    ejs,
  },
});
server.register(router);

export default server;
