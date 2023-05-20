'use client'
import {IoWarningOutline} from "react-icons/io5";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Restaurant } from "@/app/types";

interface SelectProps {
    id: string
    label: string
    register: UseFormRegister<Restaurant>
    error: FieldErrors
    value: string
    required: boolean
}

const Select = ({id, label, register, error, value, required}: SelectProps) => {
    return (
        <div
        className="flex flex-col space-y-1"
        >
            <label
            htmlFor={id}
            className="text-sm text-gray-500 font-medium"
            >
                {label}
            </label>
            <select
            id={id}
            {...register("priceRange", {required})}
            value={value}
            className={`
            py-2 px-4 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-950
            ${error[id] ? "ring-2 ring-red-500 border-red-500" : "focus:ring-gray-500"}
            `}
            >
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
            </select>
            {error[id] && (
                <div
                className="flex items-center space-x-1 text-sm text-red-500"
                >
                    <IoWarningOutline size={20} />
                    <span>{!!error[id]?.message}</span>
                </div>
            )}
        </div>
    )
}

export default Select;