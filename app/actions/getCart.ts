import prisma from "../lib/prima";
import { getCurrentUser } from "./getCurrentUser";

export async function getCart() {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return null;
    }

    const getUserCart = await prisma.cart.findMany({
        where: {
            userId: currentUser.id,
        },
        include: {
            items: true,
        }
    });

    if(!getUserCart) {
        return null;
    }

    return getUserCart;
}