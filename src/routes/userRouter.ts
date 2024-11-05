import { FastifyInstance } from "fastify";

export const userRouter = (fastify: FastifyInstance) => {
    fastify.get("/", function (_, reply) {
        reply.send({ message: "User" });
    });
};
