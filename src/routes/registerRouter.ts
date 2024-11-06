import { FastifyInstance } from "fastify";
import { getView } from "utils/getView";

export const registerRouter = (fastify: FastifyInstance) => {
    fastify.get(
        "/",
        async (_, reply) => await reply.viewAsync(getView("registerPage.ejs")),
    );
};
