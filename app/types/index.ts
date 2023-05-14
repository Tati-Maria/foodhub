import { restaurantSchema } from "../hooks/schema/restaurantSchema";
import { z } from "zod";

export type Restaurant = z.infer<typeof restaurantSchema>;