import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";
import { UserCredential } from "../interfaces/UserCredential";

export const authenticationController: FastifyPluginCallback = (fastify) => {
    fastify.post(
        "/",
        async (request: FastifyRequest<{ Body: UserCredential }>, reply) => {
            const { username, password } = request.body;

            const user = await database.user.findUnique({
                where: { username },
            });

            const passwordCorrect = user ? user.password === password : false;

            if (!(user && passwordCorrect)) {
                reply.code(401).send({ error: "Invalid token" });
                return;
            }

            const token = fastify.jwt.sign({ username });

            reply.cookie("token", token);
            reply.redirect("/");
        },
    );
};
