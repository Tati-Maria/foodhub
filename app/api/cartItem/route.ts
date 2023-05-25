import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const currentUser = await getCurrentUser();

    try {
        const cartItems = await prisma.cartItem.findMany({
            where: {
                user: {
                    id: currentUser?.id
                }
            },
            include: {
                menuItem: true,
            }
        });

        const serializedCartItems = cartItems.map((cartItem) => ({
            ...cartItem,
            menuItem: {
                ...cartItem.menuItem,
                price: cartItem.menuItem.price.toNumber(),
            }
        }))

        return NextResponse.json(JSON.stringify(serializedCartItems));
    } catch (error: any) {
        return [];
    }
}

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const cartItem = await prisma.cartItem.create({
        data: {
            ...json,
            menuItem: {
                connect: {
                    id: json.menuItemId
                }
            },
            cart: {
                connect: {
                    id: json.cartId 
                }
            },
            order: {
                connect: {
                    id: json.orderId
                }
            },
            quantity: Number(json.quantity),
            user: {
                connect: {
                    id: currentUser.id
                }
            }
        }
    });

    return NextResponse.json(JSON.stringify(cartItem));
}