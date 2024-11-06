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
})
    .register(fastifyView, {
        engine: {
            ejs,
        },
    })
    .register(fastifyFormbody)
    .register(fastifyJwt, { secret: "somesecret" })
    .register(fastifyBearerAuth, {
        addHook: false,
        keys: KEYS,
        verifyErrorLogLevel: "debug",
    })
    .register(fastifyAuth)
    .register(router);

export default server;
