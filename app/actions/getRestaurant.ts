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
                reviews: true,
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
            })),
        };

        return serializedRestaurant;
    } catch (error: any) {
        throw new Error(error.message);
    }
}