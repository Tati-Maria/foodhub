import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prima";
import { NextResponse } from "next/server";

export async function POST(
request: Request, {params}: {params: {id: string}}
) {
    const accessToken = request.headers.get("Authorization");

    if(!accessToken) {
        return NextResponse.error();
    }

    const json = await request.json();
    const currentUser = await getCurrentUser();

    const created = await prisma.menuItem.create({
        data: {
            ...json,
            menu: {
                connect: {
                    id: params.id,
                }
            },
            userId: currentUser?.id,
        }
    });

    return NextResponse.json(JSON.stringify(created), {
        status: 201,
    })

}