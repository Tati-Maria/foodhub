import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params: {userId: string}}) {
    const currentUser = await getCurrentUser();
    try {
        const cart = await prisma.cart.findMany({
            where: {
                user: {
                    id: params.userId
                }
            }
        });

        if(currentUser?.id !== params.userId) {
            return NextResponse.json({error: "You are not authorized to view this cart."}, {status: 401});
        }

        return NextResponse.json(JSON.stringify(cart));
    } catch (error: any) {
        return NextResponse.error();
    }
}

export async function POST(request: Request, {params}: {params: {userId: string}}) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const createCart = await prisma.cart.create({
        data: {
            ...json,
            user: {
                connect: {
                    id: currentUser.id
                }
            },
            total: json.total
        }
    });

    return NextResponse.json(JSON.stringify(createCart))
}