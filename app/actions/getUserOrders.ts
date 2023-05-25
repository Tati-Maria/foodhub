import prisma from "../lib/prima";
import { getCurrentUser } from "./getCurrentUser";

export async function getUserOrders() {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        throw new Error("You must be logged in to view your orders.");
    }

    try {
        const orders = await prisma.order.findMany({
            where: {
                userId: currentUser.id,
            },
            include: {
                restaurant: true,
                items: {
                    include: {
                        menuItem: true,
                    }
                }
            }
        });

        const serializedOrders = orders.map((order) => ({
            ...order,
            total: order.total.toNumber(),
            restaurant: {
                ...order.restaurant,
                name: order.restaurant.name,
                id: order.restaurant.id,
            },
            items: order.items.map((item) => ({
                ...item,
                menuItem: {
                    ...item.menuItem,
                    name: item.menuItem.name,
                    id: item.menuItem.id,
                    price: item.menuItem.price.toNumber(),
                }
            })),
        }));

        return serializedOrders;
    } catch (error) {
        throw new Error("There was a problem fetching your orders.");
    }
}