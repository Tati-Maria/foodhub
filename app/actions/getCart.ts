import prisma from "../lib/prima";
import { getCurrentUser } from "./getCurrentUser";

export async function getCart() {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return null;
    }

    const getUserCart = await prisma.order.findMany({
        where: {
            userId: currentUser.id,
        },
        include: {
            items: {
                include: {
                    menuItem: true,
                }
            },
            restaurant: {
                select: {
                    name: true,
                    id: true,
                }
            }
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
            price: item.menuItem.price.toNumber() * item.quantity,
            name: item.menuItem.name,
            quantity: item.quantity,
        })),
   }));

    return serializedCart;
}