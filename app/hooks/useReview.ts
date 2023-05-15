import { useForm } from "react-hook-form";
import { Reviews } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { menuSchema, reviewSchema } from "./schema/restaurantSchema";
import { useCallback} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface IParams {
    restaurantId: string;
}


export const useReview = (params: IParams) => {
    const { restaurantId } = params;
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset, setValue } = useForm<Reviews>({
        criteriaMode: "all",
        defaultValues: {
            title: "",
            body: "",
            rating: "",
        },
        resolver: zodResolver(reviewSchema),
    });

    const title = watch("title");
    const body = watch("body");
    const rating = watch("rating");

    const onSubmit = useCallback(async (data: Reviews) => {
        console.log(data);
        try {
            const response = await axios.post(`/api/restaurants/${restaurantId}/reviews`, data);
            if (response.status === 201) {
                toast.success("Review added successfully");
                reset();
            } else {
                toast.error("Something went wrong");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }, [reset, restaurantId]);

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
        title,
        body,
        rating,
    }
}
