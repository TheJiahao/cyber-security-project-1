import { FastifyInstance } from "fastify";
import { getView } from "utils/getView";

export const authenticationRouter = (fastify: FastifyInstance) => {
    fastify.get(
        "/",
        async (_, reply) => await reply.viewAsync(getView("loginPage.ejs")),
    );
};
