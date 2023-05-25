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
            items: {
                include: {
                    menuItem: true,
                }
            },
        }
    });

    if(!getUserCart) {
        return null;
    }

   const serializedCart = getUserCart.map((cart) => ({
        ...cart,
        total: cart.total.toNumber(),
        items: cart.items.map((item) => ({
            ...item,
            price: item.menuItem.price.toNumber(),
            name: item.menuItem.name,
            quantity: item.quantity,
            image: item.menuItem.image,
            description: item.menuItem.description,
        })),
   }));

    return serializedCart;
}