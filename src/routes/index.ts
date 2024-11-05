import { FastifyInstance } from "fastify";
import indexController from "routes/homeRoute";
import userController from "routes/userRoute";

export const router = (fastify: FastifyInstance) => {
    fastify.register(userController, { prefix: "/api/v1/user" });
    fastify.register(indexController, { prefix: "/" });
};
