import { FastifyInstance } from "fastify";
import userController from "routes/userRouter";
import { getView } from "utils/getView";
import { loginRouter } from "./loginRouter";

export const router = (fastify: FastifyInstance) => {
    fastify.get("/", (_, reply) => {
        return reply.viewAsync(getView("index.ejs"));
    });

    fastify.register(userController, { prefix: "/user" });
    fastify.register(loginRouter, { prefix: "/login" });
};
