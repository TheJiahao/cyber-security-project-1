import { FastifyInstance } from "fastify";
import indexController from "controller/indexController";
import userController from "controller/userController";

export default async function router(fastify: FastifyInstance) {
    fastify.register(userController, { prefix: "/api/v1/user" });
    fastify.register(indexController, { prefix: "/" });
}
