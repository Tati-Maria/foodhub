'use client'
import FormGroup from '../inputs/FormGroup'
import { IoWarningOutline } from 'react-icons/io5'
import Button from '../ui/Button'
import { useMenuItem } from '@/app/hooks/useMenuItem'
import ImageUpload from '../inputs/ImageUpload'

interface Props {
    params: {
        menuId: string;
        id: string;
    }
}

const CreateMenuItem = ({params}: Props) => {
    const {errors, handleSubmit, isSubmitting, register, onSubmit, name, description, price, setCustomValue, image} = useMenuItem({params});

    const inputClass = `py-2 px-4 border border-gray-300 rounded-md focus:outline-none
    focus:ring-2 focus:ring-red-500 focus:border-transparent
    ${errors.name ? "ring-2 ring-red-500 border-red-500" : "focus:ring-gray-500"}`

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col space-y-4"
    >
        <FormGroup
        double
        >
            <div
            className="flex flex-col space-y-1"
            >
                <input
                type='text'
                id='name'
                {...register('name', {required: true})}
                value={name}
                disabled={isSubmitting}
                className={inputClass}
                />
                {errors.name && (
                    <div
                    className="flex items-center space-x-1 text-sm text-red-500"
                    >
                        <IoWarningOutline size={20} />
                        <span>{errors.name.message}</span>
                    </div>
                )}
            </div>
            <div 
            className="flex flex-col space-y-1"
            >
                <input
                value={price}
                disabled={isSubmitting}
                {...register('price', {required: true})}
                className={inputClass}
                id='price'
                type='number' 
                />
                {errors.price && (
                    <div
                    className="flex items-center space-x-1 text-sm text-red-500"
                    >
                        <IoWarningOutline size={20} />
                        <span>{errors.price.message}</span>
                    </div>
                )}
            </div>
        </FormGroup>
        <FormGroup>
            <div>
                <textarea
                className={inputClass}
                placeholder="Dish Description"
                value={description}
                {...register('description', {required: true})}
                id='description'
                disabled={isSubmitting}
                />
                {errors.description && (
                    <div
                    className="flex items-center space-x-1 text-sm text-red-500"
                    >
                        <IoWarningOutline size={20} />
                        <span>{errors.description.message}</span>
                    </div>
                )}
            </div>
            <ImageUpload
            htmlFor='image'
            value={image}
            label='Dish Image'
            onUpload={(url) => setCustomValue('image', url)}
            />
        </FormGroup>
    </form>
  )
}

export default CreateMenuItem