import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const cartItem = await prisma.cartItem.create({
        data: {
            ...json,
            menuItemId: json.menuItemId,
            cartId: json.cartId,
            orderId: json.orderId,
        }
    });

    return NextResponse.json(JSON.stringify(cartItem));
}