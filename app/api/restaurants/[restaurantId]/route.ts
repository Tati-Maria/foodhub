import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, {params}: {params: {id: string}}) {
    const id = params.id;
    const json = await request.json();

    const currentUser = await getCurrentUser();
    if(!currentUser) {
        return NextResponse.error();
    }

    const restaurant = await prisma.restaurant.update({
        where: {
            id,
        },
        data: json
    });

    return NextResponse.json(JSON.stringify(restaurant), {
        status: 200,
    });
}

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