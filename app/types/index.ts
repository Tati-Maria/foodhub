import { restaurantSchema } from "../hooks/schema/restaurantSchema";
import { z } from "zod";
import { Restaurant as Restaurants, Menu, MenuItem, User, Review, Order } from "@prisma/client";

export type Restaurant = z.infer<typeof restaurantSchema>;

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {   
    id: string;
    name: string;
    email: string;
    image: string;
    emailVerified: string | null;
 }


export type SafeRestaurant = Omit<Restaurants, "createdAt" | "updatedAt"> & {
    id: string;
    name: string;
    description: string;
    image: string;
    address: string;
    phone: string;
    hours: string;
    priceRange: string;
    website: string | null;
    ownerId: string;
    rating: number;
    // user: SafeUser;
    // menus: SafeMenu[];
    // menuItems: SafeMenuItem[];
    // orders: SafeOrder[];
    // reviews: SafeReview[];
}


export type SafeMenu = Omit<Menu, "createdAt" | "updatedAt"> & {
    id: string;
    name: string;
    description: string;
    image: string;
    restaurantId: string;
    userId: string;
}

export type SafeMenuItem = Omit<MenuItem, "createdAt" | "updatedAt"> & {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    menuId: string;
    userId: string;
    restaurantId: string;
    menus: SafeMenu;
}

export type SafeReview = Omit<Review, "createdAt" | "updatedAt"> & {
    id: string;
    title: string;
    body: string;
    rating: number;
    restaurantId: string;
    userId: string;
};


export type SafeOrder = Omit<Order, "createdAt" | "updatedAt"> & {
    id: string;
    total: number;
    restaurantId: string;
    userId: string;
}