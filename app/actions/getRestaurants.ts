import prisma from "../lib/prima";

export async function getRestaurants() {
    const restaurants = await prisma.restaurant.findMany({
        include: {
            menus: true,
            orders: true,
            owner: true,
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
    }));

    return serializedRestaurants;
}