import prisma from "../lib/prima";

interface IParams {
    restaurantId: string;
}

export async function getRestaurantOrders(params: IParams) {
    try {
        
        const restaurantOrders = await prisma.order.findMany({
            where: {
                restaurantId: params.restaurantId,
            },
            include: {
                restaurant: true,
                user: true,
                items: {
                    include: {
                        menuItem: true,
                    }
                }
            }
        });

        const serializedRestaurantOrders = restaurantOrders.map((restaurantOrder) => ({
            ...restaurantOrder,
            total: restaurantOrder.total.toString(),
            restaurant: {
                ...restaurantOrder.restaurant,
                id: restaurantOrder.restaurant.id,
                name: restaurantOrder.restaurant.name,
                ownerId: restaurantOrder.restaurant.ownerId,
            },
            user: {
                ...restaurantOrder.user,
                id: restaurantOrder.user.id,
                name: restaurantOrder.user.name,
            },
            items: restaurantOrder.items.map((item) => ({
                ...item,
                menuItem: {
                    ...item.menuItem,
                    id: item.menuItem.id,
                    name: item.menuItem.name,
                    price: item.menuItem.price.toString(),
                    quantity: item.quantity,
                    image: item.menuItem.image,

                }
            })),
        }));

        return serializedRestaurantOrders;
    } catch (error: any) {
        throw new Error(error.message);
    }
}