import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "../lib/prima";

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try {
        const session = await getSession();
        if(!session?.user?.email) return null;

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            }
        });

        if(!currentUser) return null;

        return {
            ...currentUser,
            emailVerified: currentUser.emailVerified?.toISOString(),
        };
    } catch (error: any) {
        return null;
    }
}