import { useForm } from "react-hook-form";
import { Menus } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { menuSchema } from "./schema/restaurantSchema";
import { useCallback} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface IParams {
    restaurantId: string;
}


export const useMenu = (params: IParams) => {
    const { restaurantId } = params;
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset, setValue } = useForm<Menus>({
        criteriaMode: "all",
        defaultValues: {
            name: "",
            description: "",
        },
        resolver: zodResolver(menuSchema),
    });

    const name = watch("name");
    const description = watch("description");


    

    const onSubmit = useCallback(async (data: Menus) => {
        try {
            const response = await axios.post(`/api/restaurants/${restaurantId}/menus`, data);
            if (response.status === 201) {
                toast.success("Menu added successfully");
                reset();
            } else {
                toast.error("Something went wrong");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }, [reset, restaurantId]);

    // useEffect(() => {
    //     register("name");
    //     register("description");
    //     register("image");
    // }, [name, description, image, register]);

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
        name,
        description,
    }
}