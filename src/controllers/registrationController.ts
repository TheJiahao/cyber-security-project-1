import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";
import { UserCredential } from "../interfaces/UserCredential";

export const registrationController: FastifyPluginCallback = (fastify) => {
    fastify.post(
        "/",
        async (request: FastifyRequest<{ Body: UserCredential }>, reply) => {
            const { username, password } = request.body;

            try {
                await database.user.create({
                    data: { username, password },
                });
            } catch {
                reply.code(400).send({
                    error: "Registration failed, use another username",
                });
                return;
            }

            const token = fastify.jwt.sign({ username });

            reply.cookie("token", token);
            reply.redirect("/");
        },
    );
};
