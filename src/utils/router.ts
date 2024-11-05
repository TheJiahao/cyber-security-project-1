import indexController from "routes/homeRoute";
import userController from "routes/userRoute";
import { FastifyInstance } from "fastify";

export default function router(fastify: FastifyInstance) {
    fastify.register(userController, { prefix: "/api/v1/user" });
    fastify.register(indexController, { prefix: "/" });
}
