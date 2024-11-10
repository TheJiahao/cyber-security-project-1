import { User } from "@prisma/client";
import { FastifyRequest } from "fastify";
import { database } from "../utils/database";

export const getUser = async (
    request: FastifyRequest,
): Promise<User | null> => {
    let user = null;

    if (request.cookies.token) {
        const { username } = await request.jwtVerify<{
            username: string;
        }>();

        user = await database.user.findUnique({
            where: { username },
        });
    }

    return user;
};
