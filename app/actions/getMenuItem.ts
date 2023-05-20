import prisma from "../lib/prima";

interface IParams {
    restaurantId: string;
    menuId: string;
    id: string;
}

export async function getMenuItem(params: IParams) {
    try {
        const { id, menuId, restaurantId } = params;

        const menuItem = await prisma.menuItem.findFirst({
            where: {
                id,
                menuId,
                menu: {
                    restaurantId,
                },
            },
        });

        if(!menuItem) {
            return null;
        }

        return menuItem
    } catch (error: any) {
        throw new Error(error.message);
    }
}