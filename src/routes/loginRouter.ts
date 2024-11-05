import { FastifyInstance } from "fastify";
import { getView } from "utils/getView";

export const loginRouter = (fastify: FastifyInstance) => {
    fastify.get(
        "/",
        async (_, reply) => await reply.viewAsync(getView("login.ejs")),
    );
};
