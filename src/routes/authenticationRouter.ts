import { loginController } from "controllers/loginController";
import { logoutController } from "controllers/logoutController";
import { registerController } from "controllers/registerController";
import { FastifyInstance } from "fastify";

export const authenticationRouter = (fastify: FastifyInstance) => {
    fastify.register(loginController, { prefix: "/login" });
    fastify.register(logoutController, { prefix: "/logout" });
    fastify.register(registerController, { prefix: "/register" });
};
