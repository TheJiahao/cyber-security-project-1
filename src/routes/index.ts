import { FastifyInstance } from "fastify";
import indexController from "routes/homeRouter";
import userController from "routes/userRouter";

export const router = (fastify: FastifyInstance) => {
    fastify.register(userController, { prefix: "/user" });
    fastify.register(indexController, { prefix: "/" });
};
