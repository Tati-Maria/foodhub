import {z} from 'zod';

export const restaurantSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
    description: z.string().min(10, "Description must be at least 10 characters long").max(500, "Description must be at most 1000 characters long"),
    image: z.string().url("Image must be a valid URL"),
    address: z.string().min(10, "Address must be at least 10 characters long").max(100, "Address must be at most 100 characters long"),
    phone: z.string().min(10, "Phone must be at least 10 characters long").max(15, "Phone must be at most 15 characters long"),
    hours: z.string().min(10, "Hours must be at least 10 characters long").max(100, "Hours must be at most 100 characters long"),
    priceRange: z.enum(["$", "$$", "$$$", "$$$$"]),
    website: z.string().url("Website must be a valid URL").optional(),
});

export const menuSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
    description: z.string().min(10, "Description must be at least 10 characters long").max(500, "Description must be at most 1000 characters long"),
});


export const menuItemSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
    description: z.string().min(10, "Description must be at least 10 characters long").max(500, "Description must be at most 1000 characters long"),
    image: z.string().url("Image must be a valid URL"),
    price: z.number().min(1, "Price must be at least $1").max(1000, "Price must be at most $1000"),
});

export const reviewSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long").max(50, "Title must be at most 50 characters long"),
    body: z.string().min(10, "Body must be at least 10 characters long").max(500, "Body must be at most 1000 characters long"),
    rating: z.string().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5")
});