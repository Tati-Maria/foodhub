import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request, {params}: {params: {id: string}}) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const order = await prisma.order.create({
        data: {
            ...json,
            restaurantId: params.id,
            userId: currentUser.id,
        }
    })

    return NextResponse.json(order);
}