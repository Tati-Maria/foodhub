import prisma from "../lib/prima";
import { getCurrentUser } from "./getCurrentUser";


export async function getUserRestaurants() {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return null;
    }

    const restaurants = await prisma.restaurant.findMany({
        where: {
            ownerId: currentUser.id,
        },
        include: {
            menus: {
                include: {
                    menuItems: {
                        select: {
                            id: true,
                        }
                    },
                }
            },
            orders: true,
            owner: true,
            reviews: {
                include: {
                    user: true,
                }
            },
        },
        orderBy: {
            name: "asc",
        }
    });

    const serializedRestaurants = restaurants.map((restaurant) => ({
        ...restaurant,
        menus: restaurant.menus.map((menu) => ({
            ...menu,
            restaurant: restaurant.id,
            menuItems: menu.menuItems.map((menuItem) => ({
                ...menuItem,
                menu: menu.id,
            })),
        })),
        orders: restaurant.orders.map((order) => ({
            ...order,
            total: order.total.toNumber(),
            restaurant: restaurant.id,
        })),
        owner: restaurant.owner.id,
        reviews: restaurant.reviews.map((review) => ({
            ...review,
            restaurant: restaurant.id,
            user: review.user.name,
        })),
    }));

    return serializedRestaurants;
}