import { FastifyInstance } from "fastify";
import { userRouter } from "routes/userRouter";
import { database } from "utils/database";
import { getUser } from "utils/getUser";
import { getView } from "utils/getView";
import { authenticationRouter } from "./authenticationRouter";

export const router = (fastify: FastifyInstance) => {
    fastify.get("/", async (request, reply) => {
        const user = await getUser(request);
        const users = await database.user.findMany();

        return reply.viewAsync(getView("index.ejs"), { user, users });
    });

    fastify.register(userRouter, { prefix: "/user" });
    fastify.register(authenticationRouter, { prefix: "/" });
};
