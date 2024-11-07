import { FastifyPluginCallback, FastifyRequest } from "fastify";
import { database } from "utils/database";
import { getView } from "utils/getView";
import { UserCredential } from "../interfaces/UserCredential";

export const loginController: FastifyPluginCallback = (fastify) => {
    fastify.get(
        "/",
        async (_, reply) => await reply.viewAsync(getView("loginPage.ejs")),
    );

    fastify.post(
        "/",
        async (request: FastifyRequest<{ Body: UserCredential }>, reply) => {
            const { username, password } = request.body;

            const user = await database.user.findUnique({
                where: { username },
            });

            const passwordCorrect = user ? user.password === password : false;

            /*
            Hashed solution

            const passwordCorrect = user
                ? await bcrypt.compare(password, user.password)
                : false;
            */

            if (!(user && passwordCorrect)) {
                reply.code(401).send({ error: "Invalid token" });
                return;
            }

            const token = fastify.jwt.sign({ username });

            reply.cookie("token", token).redirect("/");
        },
    );
};
