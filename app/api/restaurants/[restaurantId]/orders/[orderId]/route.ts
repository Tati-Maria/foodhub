import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prima";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    const id = params.id;

    const currentUser = await getCurrentUser();
    if(!currentUser) {
        return NextResponse.error();
    }

    const deletedRestaurant = await prisma.restaurant.delete({
        where: {
            id,
        }
    });

    return NextResponse.json(deletedRestaurant);
}