import fastifyAuth from "@fastify/auth";
import fastifyBearerAuth from "@fastify/bearer-auth";
import fastifyFormbody from "@fastify/formbody";
import fastifyJwt from "@fastify/jwt";
import fastifyView from "@fastify/view";
import { KEYS } from "config";
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
server.register(fastifyJwt, { secret: "somesecret" });
server.register(fastifyBearerAuth, {
    addHook: false,
    keys: KEYS,
    verifyErrorLogLevel: "debug",
});
server.register(fastifyAuth);
server.register(router);

export default server;
