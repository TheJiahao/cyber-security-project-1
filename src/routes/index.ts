import { FastifyInstance } from "fastify";
import { userRouter } from "routes/userRouter";
import { database } from "utils/database";
import { getView } from "utils/getView";
import { authenticationRouter } from "./authenticationRouter";

export const router = (fastify: FastifyInstance) => {
    fastify.get("/", async (request, reply) => {
        let user = null;

        if (request.cookies.token) {
            const { username } = await request.jwtVerify<{
                username: string;
            }>();

            user = await database.user.findUnique({
                where: { username },
            });
        }

        return reply.viewAsync(getView("index.ejs"), { user });
    });

    fastify.register(userRouter, { prefix: "/user" });
    fastify.register(authenticationRouter, { prefix: "/" });
};
