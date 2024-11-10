import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";
import { getView } from "utils/getView";
import { UserCredential } from "../interfaces/UserCredential";
// import bcrypt from "bcrypt";

export const registerController: FastifyPluginCallback = (fastify) => {
    fastify.get(
        "/",
        async (_, reply) => await reply.viewAsync(getView("registerPage.ejs")),
    );

    fastify.post(
        "/",
        async (request: FastifyRequest<{ Body: UserCredential }>, reply) => {
            const { username, password } = request.body;

            const user = await database.user.findUnique({
                where: {
                    username,
                },
            });

            if (user) {
                reply.code(400).send({
                    error: `User ${JSON.stringify(user)} exists, try another`,
                    //error: "Registration failed, use another username",
                });

                return;
            }

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

            const token = fastify.jwt.sign({ username });

            reply.cookie("token", token).redirect("/");
        },
    );
};
