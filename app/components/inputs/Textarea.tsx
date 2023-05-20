'use client'
import { IoWarningOutline } from "react-icons/io5";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { Restaurant } from "@/app/types";


interface Props {
    id: string;
    label: string;
    register: UseFormRegister<Restaurant>
    error: FieldErrors
    required: boolean
    disabled?: boolean
    value: string
    placeholder?: string
    className?: string
}

const TextArea = ({
    id,
    label,
    register,
    error,
    className,
    required,
    placeholder,
    value,
    disabled,
}: Props) => {
    return (
        <div
        className={`flex flex-col space-y-1 ${className}`}
        >
            <label
            htmlFor={id}
            className="text-sm text-gray-500 font-medium"
            >
                {label}
            </label>
            <textarea
            disabled={disabled}
            maxLength={500}
            minLength={10}
            id={id}
            {...register("description", {required})}
            placeholder={placeholder}
            value={value}
            className={`
            py-2 px-4 border border-gray-300 rounded-md focus:outline-none text-gray-950 
            focus:ring-2 focus:ring-red-500 focus:border-transparent 
            ${error[id] ? "ring-2 ring-red-500 border-red-500" : "focus:ring-gray-500"}
            ${disabled && "bg-gray-100 cursor-not-allowed"}
            `}
            />
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
};

export default TextArea;