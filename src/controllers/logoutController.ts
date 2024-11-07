import { FastifyPluginCallback } from "fastify";

export const logoutController: FastifyPluginCallback = (fastify) => {
    fastify.post("/", async (_, reply) => {
        reply.clearCookie("token").redirect("/");
    });
};
