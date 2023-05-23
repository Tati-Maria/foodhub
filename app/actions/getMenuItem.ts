import prisma from "../lib/prima";
import Decimal from "decimal.js/decimal"

interface IParams {
    restaurantId: string;
    menuId: string;
    id: string;
}

export async function getMenuItem(params: IParams) {
    try {
        const { id, menuId, restaurantId } = params;

        const menuItem = await prisma.menuItem.findUnique({
            where: {
                id,
            },
            include: {
                menu: {
                    select: {
                        restaurantId: true,
                    }
                }
            }
        });

        if(!menuItem) {
            return null;
        }

        return {
            ...menuItem,
            price: new Decimal(menuItem.price).toFixed(2),
            menu: menuItem.menu.restaurantId,
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
}