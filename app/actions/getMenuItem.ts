import prisma from "../lib/prima";
import Decimal from "decimal.js/decimal"

interface IParams {
    menuItemId: string;
}

export async function getMenuItem(
    { menuItemId }: IParams
) {
    try {
        const menuItem = await prisma.menuItem.findUnique({
            where: {
                id: menuItemId,
                
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