import { menuItemSchema, menuSchema, restaurantSchema, reviewSchema } from "../hooks/schema/restaurantSchema";
import { z } from "zod";
import { Restaurant as Restaurants, Menu, MenuItem, User, Review, Order } from "@prisma/client";
import Decimal from "decimal.js/decimal";

export type Restaurant = z.infer<typeof restaurantSchema>;
export type Menus = z.infer<typeof menuSchema>;
export type Reviews = z.infer<typeof reviewSchema>;
export type MenuItems = z.infer<typeof menuItemSchema>;

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
    website: string | null;
    phone: string;
    hours: string;
    rating: number;
    priceRange: string;
    ownerId: string;
    owner: SafeUser;
    menus: SafeMenu[];
    menuItems: SafeMenuItem[];
    orders: SafeOrder[];
    reviews: SafeReview[];
}

export type SafeRestaurantProps = {
    id: string;
    name: string;
    description: string;
    image: string;
    address: string;
    website: string | null;
    phone: string;
    hours: string;
    rating: number;
    priceRange: string;
    ownerId: string;
} 

export type RestaurantReviewProps = {
    restaurant: string;
    id: string;
    title: string;
    body: string;
    rating: number;
    restaurantId: string;
    userId: string;
}[] | undefined;



export type SafeMenu = Omit<Menu, "createdAt" | "updatedAt"> & {
    id: string;
    name: string;
    description: string;
    restaurantId: string;
    userId: string;
    restaurant: SafeRestaurant;
    menuItems: SafeMenuItem[];
}

export type SafeMenuProps = {
    id: string;
    name: string;
    description: string;
    restaurantId: string;
    userId: string;
}

export type SafeMenuItemProps = {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    menuId: string;
    userId: string;
}

export type SafeMenuItem = Omit<MenuItem, "createdAt" | "updatedAt"> & {
    id: string;
    name: string;
    description: string;
    image: string;
    price: Decimal;
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

export type SafeOrderProps = {
    id: string;
    total: string;
    restaurantId: string;
    userId: string;
    restaurant: string;
}