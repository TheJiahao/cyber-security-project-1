import { loginController } from "controllers/loginController";
import { registerController } from "controllers/registerController";
import { FastifyPluginCallback } from "fastify";

export const userRouter: FastifyPluginCallback = (fastify) => {
    fastify.get("/", function (_, reply) {
        reply.send({ message: "User" });
    });

    fastify.register(loginController, { prefix: "/auth" });
    fastify.register(registerController, { prefix: "/register" });
};
