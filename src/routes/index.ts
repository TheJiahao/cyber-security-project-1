import { FastifyInstance } from "fastify";
import indexController from "routes/homeRouter";
import userController from "routes/userRouter";
import { loginRouter } from "./loginRouter";

export const router = (fastify: FastifyInstance) => {
    fastify.register(userController, { prefix: "/user" });
    fastify.register(indexController, { prefix: "/" });
    fastify.register(loginRouter, { prefix: "/login" });
};
