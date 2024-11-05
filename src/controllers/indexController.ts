import { FastifyInstance } from "fastify";

export default function indexController(fastify: FastifyInstance) {
    fastify.get("/", (_, reply) => {
        return reply.viewAsync("layouts/index.ejs");
    });
}
