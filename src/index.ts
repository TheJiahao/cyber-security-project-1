import server from "server";

const PORT = Number(process.env.PORT) || 3006;

await server.listen({ port: PORT });
