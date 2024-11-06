import { FastifyInstance } from "fastify";
import { userRouter } from "routes/userRouter";
import { getView } from "utils/getView";
import { loginRouter } from "./loginRouter";
import { registerRouter } from "./registerRouter";

export const router = (fastify: FastifyInstance) => {
    fastify.get("/", (_, reply) => {
        return reply.viewAsync(getView("index.ejs"));
    });

    fastify.register(userRouter, { prefix: "/user" });
    fastify.register(loginRouter, { prefix: "/login" });
    fastify.register(registerRouter, { prefix: "/register" });
};
