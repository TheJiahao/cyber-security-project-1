import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";
import { getView } from "utils/getView";

export const userRouter: FastifyPluginCallback = (fastify) => {
    fastify.get("/", function (_, reply) {
        reply.send({ message: "User" });
    });

    fastify.get(
        "/:username",
        async (
            request: FastifyRequest<{ Params: { username: string } }>,
            reply,
        ) => {
            const { username } = request.params;

            const user = await database.user.findUnique({
                where: { username },
            });

            return reply.viewAsync(getView("profilePage.ejs"), { user });
        },
    );
};
