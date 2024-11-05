import fastifyFormbody from "@fastify/formbody";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import fastify from "fastify";
import { router } from "routes";

const server = fastify({
    logger: {
        transport: {
            target: "@fastify/one-line-logger",
        },
    },
});

server.register(fastifyView, {
    engine: {
        ejs,
    },
});
server.register(fastifyFormbody);
server.register(router);

export default server;
