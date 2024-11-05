import { FastifyInstance } from "fastify";

export const loginRouter = (fastify: FastifyInstance) => {
    fastify.get("/", (_, reply) => {
        reply.send({ message: "Hello" });
    });
};
