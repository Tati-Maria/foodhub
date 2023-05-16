import prisma from "../lib/prima";

interface IParams {
    id: string;
}

export async function getMenu(params: IParams) {
    try {
        const { id } = params;

        const menu = await prisma.menu.findUnique({
            where: {
                id,
            },
            include: {
                menuItems: true,
            }
        });

        if(!menu) {
            return null;
        }

        return menu
    } catch (error: any) {
        throw new Error(error.message);
    }
}