import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";
import { getView } from "utils/getView";
import { UserCredential } from "../interfaces/UserCredential";

export const registerController: FastifyPluginCallback = (fastify) => {
    fastify.get(
        "/",
        async (_, reply) => await reply.viewAsync(getView("registerPage.ejs")),
    );

    fastify.post(
        "/",
        async (request: FastifyRequest<{ Body: UserCredential }>, reply) => {
            const { username, password } = request.body;

            try {
                await database.user.create({
                    data: {
                        username,
                        password,
                        /*
                        Hashed solution

                        password: await bcrypt.hash(password, 10), 
                        */
                    },
                });
            } catch (error) {
                console.log(error);

                reply.code(400).send({
                    error: "Registration failed, use another username",
                });
                return;
            }

            const token = fastify.jwt.sign({ username });

            reply.cookie("token", token).redirect("/");
        },
    );
};
