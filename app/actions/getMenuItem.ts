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
                    include: {
                        restaurant: true,
                    }
                }
            }
        });

        if(!menuItem) {
            return null;
        }

        return {
            ...menuItem,
            price: new Decimal(menuItem.price).toString(),
            menu: {
                ...menuItem.menu,
                restaurant: {
                    ...menuItem.menu.restaurant,
                }
            },
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
}