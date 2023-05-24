import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";


export async function GET(request: Request, {params}: {params: {restaurantId: string}}) {
    try {
        const orders = await prisma.order.findMany();
        return NextResponse.json(JSON.stringify(orders));
    } catch (error: any) {
        return NextResponse.error();
    }
}

export async function POST(request: Request, {params}: {params: {restaurantId: string}}) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const createOrder = await prisma.order.create({
        data: {
            ...json,
            user: {
                connect: {
                    id: currentUser.id
                }
            },
            restaurant: {
                connect: {
                    id: params.restaurantId
                }
            },
            total: new Prisma.Decimal(json.total)
        }
    });

    return NextResponse.json(JSON.stringify(createOrder))
}