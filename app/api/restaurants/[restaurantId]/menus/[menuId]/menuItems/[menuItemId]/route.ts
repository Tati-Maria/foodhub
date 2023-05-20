import prisma from "@/app/lib/prima";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

interface IParams {
    id: string;
    menuId: string;
}

export async function DELETE(request: Request, {params}: {params: IParams}) {
    const id = params.id;
    
    const currentUser = await getCurrentUser();
    if(!currentUser) {
        return NextResponse.error();
    }

    const deletedMenuItem = await prisma.menuItem.delete({
        where: {
            id,
        }
    });

    return NextResponse.json(deletedMenuItem);
}