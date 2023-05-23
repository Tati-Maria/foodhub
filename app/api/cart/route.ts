import prisma from "@/app/lib/prima";   
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { getRestaurant } from "@/app/actions/getRestaurant";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) return NextResponse.error();

    const json = await request.json();

    const cart = await prisma.cart.create({
        data: {
            ...json,
            userId: currentUser.id,
            total: new Prisma.Decimal(json.total)
        }
    });

    return NextResponse.json(cart);
}