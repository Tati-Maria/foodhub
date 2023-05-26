import prisma from "../lib/prima";

export async function getRestaurants() {
    const restaurants = await prisma.restaurant.findMany({
        include: {
            menus: true,
            orders: true,
            owner: true,
            reviews: true,
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
            total: order.total.toNumber(),
            restaurant: restaurant.id,
        })),
        owner: restaurant.owner.id,
        reviews: restaurant.reviews.map((review) => ({
            ...review,
            rating: restaurant.reviews.reduce((acc, review) => acc + review.rating, 0) / restaurant.reviews.length, 
        })),
    }));

    return serializedRestaurants;
}