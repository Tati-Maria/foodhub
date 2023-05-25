import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const currentUser = await getCurrentUser();

    try {
        const cart = await prisma.cart.findMany({
            where: {
                user: {
                    id: currentUser?.id
                }
            }
        });

        const serializedCart = cart.map((cartItem) => ({
            ...cartItem,
            total: cartItem.total.toNumber(),
        }))

        return NextResponse.json(JSON.stringify(serializedCart));
    } catch (error: any) {
        return [];
    }
}