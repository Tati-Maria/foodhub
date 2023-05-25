import prisma from "../lib/prima";

interface IParams {
    menuId: string;
    id: string;
}

export async function getMenu(params: IParams) {
    try {
        const { id, menuId } = params;

        const menu = await prisma.menu.findFirst({
            where: {
                id: menuId,
                restaurantId: id,
            },
            include: {
                menuItems: true,
            }
        });

        if(!menu) {
            return null;
        }

        return {
            ...menu,
            menuItems: menu.menuItems.map((menuItem) => ({
                ...menuItem,
                price: menuItem.price.toNumber(),
                menu: menu.id,
            })),
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
}