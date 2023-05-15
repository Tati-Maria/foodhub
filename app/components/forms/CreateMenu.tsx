'use client'
import React from 'react'
import Button from '../ui/Button'
import { useMenu } from '@/app/hooks/useMenu'
import FormGroup from '../inputs/FormGroup'
import { IoWarningOutline } from 'react-icons/io5'

interface Props {
    restaurantId: string
}

const CreateMenus = (params: Props) => {
    const {errors, handleSubmit, isSubmitting, register, onSubmit, name, description} = useMenu(params);

    const inputClass = `py-2 px-4 border border-gray-300 rounded-md focus:outline-none
    focus:ring-2 focus:ring-red-500 focus:border-transparent
    ${errors.name ? "ring-2 ring-red-500 border-red-500" : "focus:ring-gray-500"}`

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col space-y-4"
    >
        <FormGroup>
            <div
            className="flex flex-col space-y-1"
            >
                <input
                placeholder='eg. "Breakfast Menu"'
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
        </FormGroup>
        <FormGroup
        double
        >
           <div
              className="flex flex-col space-y-1"
           >
            <textarea
                className={inputClass}
                placeholder="eg. 'We serve breakfast from 8am to 11am'"
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
        </FormGroup>
        <Button
        type='submit'
        disabled={isSubmitting}
        className='bg-red-500 hover:bg-red-600' 
        text='Create Menu'
        />
    </form>
  )
}

export default CreateMenus;