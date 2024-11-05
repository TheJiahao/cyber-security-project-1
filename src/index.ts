import server from "server";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;

await server.listen({ port: FASTIFY_PORT });

console.log(
    `🚀  Fastify server running on port http://localhost:${FASTIFY_PORT.toString()}`,
);
console.log(`Route index: /`);
console.log(`Route user: /api/v1/user`);
