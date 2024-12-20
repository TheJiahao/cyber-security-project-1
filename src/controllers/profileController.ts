import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";
// import { getUser } from "utils/getUser";
import { getView } from "utils/getView";

interface ParamsType {
    username: string;
}

interface BodyType {
    description: string;
}

export const profileController: FastifyPluginCallback = (fastify) => {
    fastify.get(
        "/:username",
        async (request: FastifyRequest<{ Params: ParamsType }>, reply) => {
            const { username } = request.params;

            const user = await database.user.findUnique({
                where: { username },
            });

            return reply.viewAsync(getView("profilePage.ejs"), { user });
        },
    );

    fastify.post(
        "/:username",
        async (
            request: FastifyRequest<{ Params: ParamsType; Body: BodyType }>,
            reply,
        ) => {
            const { username } = request.params;

            /* 
            const user = await getUser(request);

            if (!(user && user.username === username)) {
                reply.status(401);
                return;
            } 
            */

            const { description } = request.body;

            await database.user.update({
                where: { username },
                data: {
                    description,
                },
            });

            reply.redirect(request.url);
        },
    );
};
