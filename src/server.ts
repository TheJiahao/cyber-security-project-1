import fastifyCookie from "@fastify/cookie";
import fastifyFormbody from "@fastify/formbody";
import fastifyJwt from "@fastify/jwt";
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
})
    .register(fastifyView, {
        engine: {
            ejs,
        },
    })
    .register(fastifyFormbody)
    .register(fastifyJwt, {
        secret: "somesecret",
        cookie: {
            cookieName: "token",
            signed: false,
        },
    })
    .register(fastifyCookie, {
        secret: "someSecret",
        hook: "onRequest",
        parseOptions: {
            httpOnly: true,
            path: "/",
        },
    })
    .register(router);

export default server;
