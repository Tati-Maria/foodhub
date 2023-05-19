import prisma from '@/app/lib/prima';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const currentUser = await getCurrentUser();
    const accessToken = request.headers.get('Authorization');

    if(!currentUser || !accessToken) {
        return NextResponse.json({
            error: 'Not authorized',
        }, {
            status: 401,
        })
    }

    const getUserRestaurants = await prisma.restaurant.findMany({
        where: {
            ownerId: currentUser.id,
        },
        include: {
            menus: true,
            orders: true,
            owner: true,
        }
    });

    if(!getUserRestaurants) {
        return NextResponse.json({
            error: 'Not found',
        }, {
            status: 404,
        });
    }

    return NextResponse.json(getUserRestaurants);
}