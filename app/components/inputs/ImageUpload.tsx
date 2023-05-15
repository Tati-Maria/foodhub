'use client'
import {CldUploadButton} from "next-cloudinary";
import { useCallback } from "react";
import {TbPhotoPlus} from "react-icons/tb";
import {AiOutlineCheckCircle} from "react-icons/ai";


declare global {
    var cloudinary: any;
}

type ImageUploadProps = {
    onUpload: (url: string) => void;
    value: string;
    htmlFor: string;
    label: string;
}


const ImageUpload = ({onUpload, value, htmlFor, label}: ImageUploadProps) => {
    const handleUpload = useCallback((result: any) => {
        onUpload(result.info.secure_url);
    }, [onUpload]);

    return (
        <div
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4"
        >
            <label
            htmlFor={htmlFor}
            className="text-sm text-gray-500 font-medium"
            >
                {label}
            </label>
            <CldUploadButton
            uploadPreset="fvi7whwb"
            onUpload={handleUpload}
            options={{
                maxFiles: 1,
                resourceType: 'image',
                clientAllowedFormats: ['png', 'jpeg', 'jpg'],
                maxFileSize: 1000000,
            }}>
                <div
                className={`flex flex-col items-center justify-center space-y-2 ${value ? "text-green-500": "text-gray-500"}`}
                >
                    {value ? (<AiOutlineCheckCircle size={25} />) : (<TbPhotoPlus size={25} />)}
                </div>
            </CldUploadButton>
        </div>
    )
}

export default ImageUpload;
