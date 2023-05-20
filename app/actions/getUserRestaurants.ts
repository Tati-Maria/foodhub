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
            menus: true,
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
        })),
        orders: restaurant.orders.map((order) => ({
            ...order,
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