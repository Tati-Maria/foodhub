import prisma from "../lib/prima";

interface IParams {
    restaurantId: string;
}

export async function getRestaurant(params: IParams) {
    try {
        const { restaurantId } = params;
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                id: restaurantId,
            },
            include: {
                menus: {
                    include: {
                        menuItems: true,
                    }
                },
                reviews: {
                    include: {
                        user: true,
                    }
                },
                orders: true,
            }
        });

        const serializedRestaurant = {
            ...restaurant,
            menus: restaurant?.menus.map((menu) => ({
                ...menu,
                restaurant: restaurant.id,
                menuItems: menu.menuItems.map((menuItem) => ({
                    ...menuItem,
                    menu: menu.id,
                })),
                
            })),
            reviews: restaurant?.reviews.map((review) => ({
                ...review,
                restaurant: restaurant.id,
                user: review.user.name 
            })),
            orders: restaurant?.orders.map((order) => ({
                ...order,
                restaurant: restaurant.id,
                total: order.total.toString(),
            })),
        };

        return serializedRestaurant;
    } catch (error: any) {
        throw new Error(error.message);
    }
}