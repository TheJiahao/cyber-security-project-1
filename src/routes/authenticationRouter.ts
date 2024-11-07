import { loginController } from "controllers/loginController";
import { registerController } from "controllers/registerController";
import { FastifyInstance } from "fastify";

export const authenticationRouter = (fastify: FastifyInstance) => {
    fastify.register(loginController, { prefix: "/login" });
    fastify.register(registerController, { prefix: "/register" });
};
