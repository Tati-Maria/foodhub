import prisma from "../lib/prima";

export async function getMenus() {
    const menus = await prisma.menu.findMany({
        orderBy: {
            name: "asc",
        },
        include: {
            menuItems: true,
        }

    });
    
    return menus;
}