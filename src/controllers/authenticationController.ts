import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";

interface UserCredential {
    username: string;
    password: string;
}

export const authenticationController: FastifyPluginCallback = (fastify) => {
    fastify.post(
        "/",
        async (request: FastifyRequest<{ Body: UserCredential }>, reply) => {
            const { username } = request.body;

            const user = await database.user.findUnique({
                where: { username },
            });

            if (!user) {
                reply.code(400);
                return;
            }

            const token = fastify.jwt.sign({ username });

            reply.send({ token });
        },
    );
};
