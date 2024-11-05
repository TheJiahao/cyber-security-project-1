import { authenticationController } from "controllers/authenticationController";
import { FastifyPluginCallback } from "fastify";

export const userRouter: FastifyPluginCallback = (fastify) => {
    fastify.get("/", function (_, reply) {
        reply.send({ message: "User" });
    });

    fastify.register(authenticationController, { prefix: "/auth" });
};
