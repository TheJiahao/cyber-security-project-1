import fastifyCookie from "@fastify/cookie";
import fastifyFormbody from "@fastify/formbody";
import fastifyJwt from "@fastify/jwt";
import fastifyView from "@fastify/view";
import { SECRET_KEY } from "config";
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
    .register(fastifyJwt, {
        secret: SECRET_KEY,
        cookie: {
            cookieName: "token",
            signed: false,
        },
    })
    .register(fastifyCookie, {
        secret: SECRET_KEY,
        hook: "onRequest",
        parseOptions: {
            httpOnly: true,
            path: "/",
        },
    })
    .register(router);

export default server;
