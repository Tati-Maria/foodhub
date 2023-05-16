import {useForm} from "react-hook-form";
import {MenuItems} from "../types";
import {zodResolver} from "@hookform/resolvers/zod";
import {menuItemSchema} from "./schema/restaurantSchema";
import {useCallback} from "react";
import axios from "axios";
import {toast} from "react-hot-toast";


interface Props {
    params: {
        menuId: string;
        id: string;
    }
}


export const useMenuItem = ({params}: Props) => {
    
    const {register, handleSubmit, formState: {errors, isSubmitting}, watch, reset, setValue} = useForm<MenuItems>({
        criteriaMode: "all",
        defaultValues: {
            name: "",
            description: "",
            image: "",
            price: 0,
        },
        resolver: zodResolver(menuItemSchema),
    });

    //setValue
    
    const name = watch("name");
    const description = watch("description");
    const image = watch("image");
    const price = watch("price");
    
    const setCustomValue = (id:string , value: any) => {
        setValue("image", value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }
    const onSubmit = useCallback(async (data: MenuItems) => {
        try {
            const response = await axios.post(`/api/restaurants/${params.menuId}/menus/${params.id}/menuItems`, data);
            if (response.status === 201) {
                toast.success("Menu item added successfully");
                reset();
            } else {
                toast.error("Something went wrong");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }, [reset, params.menuId, params.id]);

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
        name,
        description,
        image,
        price,
        setCustomValue,
    }

}
