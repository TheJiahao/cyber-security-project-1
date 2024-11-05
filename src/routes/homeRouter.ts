import { FastifyInstance } from "fastify";
import { getView } from "utils/getView";

export default function indexController(fastify: FastifyInstance) {
    fastify.get("/", (_, reply) => {
        return reply.viewAsync(getView("index.ejs"));
    });
}
