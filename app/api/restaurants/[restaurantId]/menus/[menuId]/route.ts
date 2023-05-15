import prisma from "@/app/lib/prima";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    {params: {id, menuId}}: {params: {id: string, menuId: string}}
) {
    try {
        const menus = await prisma.menu.findFirst({
            where: {
                id: menuId,
                restaurantId: id,
            }
        })

        return NextResponse.json(JSON.stringify(menus), {
            status: 200,
        });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function PATCH(
    request: Request,
    {params: {id, menuId}}: {params: {id: string, menuId: string}}
) {
    const accessToken = request.headers.get("Authorization");

    if(!accessToken) {
        return NextResponse.error();
    }
    
    const json = await request.json();
    const update = await prisma.menu.update({
        where: {
            id: menuId,
        },
        data: json
    });

    return NextResponse.json(update);
}

export async function DELETE(
    request: Request,
    {params: {id, menuId}}: {params: {id: string, menuId: string}}
) {
    const accessToken = request.headers.get("Authorization");

    if(!accessToken) {
        return NextResponse.error();
    }

    const deletedMenu = await prisma.menu.delete({
        where: {
            id: menuId,
        }
    });

    return NextResponse.json(deletedMenu);
}