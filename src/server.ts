import fastifyView from "@fastify/view";
import ejs from "ejs";
import fastify from "fastify";
import router from "router";

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
server.register(router);

export default server;
