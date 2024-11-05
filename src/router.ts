import indexController from "controllers/indexController";
import userController from "controllers/userController";
import { FastifyInstance } from "fastify";

export default function router(fastify: FastifyInstance) {
    fastify.register(userController, { prefix: "/api/v1/user" });
    fastify.register(indexController, { prefix: "/" });
}
