import { useForm } from "react-hook-form"
import { Restaurant } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { restaurantSchema } from "./schema/restaurantSchema"
import { useCallback } from "react"
import axios from "axios";
import {toast} from "react-hot-toast";
import { NextResponse } from "next/server"


export const useRestaurant = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, watch, reset, setValue} = useForm<Restaurant>({
        criteriaMode: "all",
        defaultValues: {
            name: "",
            description: "",
            image: "",
            address: "",
            phone: "",
            priceRange: "$",
            website: "",
            hours: "",
        },
        resolver: zodResolver(restaurantSchema),
    });

    const name = watch("name");
    const description = watch("description");
    const image = watch("image");
    const phone = watch("phone");
    const website = watch("website");
    const priceRange = watch("priceRange");
    const hours = watch("hours");
    const address = watch("address");

    //setValue
    const setCustomValue = (id:string , value: any) => {
        setValue("image", value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }

    const onSubmit = useCallback(async (data: Restaurant) => {
        try {
            const response = await axios.post("/api/restaurants", data);
            if (response.status === 201) {
                toast.success("Restaurant added successfully");
                reset();
                NextResponse.redirect("http://localhost:3000/restaurants");
            } else {
                toast.error("Something went wrong");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }, [reset]);

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
        name,
        description,
        image,
        phone,
        website,
        priceRange,
        hours,
        address,
        setCustomValue,
    }
}