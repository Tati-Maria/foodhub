'use client'

import FormGroup from '../inputs/FormGroup'
import { IoWarningOutline } from 'react-icons/io5'
import Button from '../ui/Button'
import {useReview} from '@/app/hooks/useReview'

interface Props {
    restaurantId: string;
}

const CreateReview = (params: Props) => {
    const {errors, handleSubmit, isSubmitting, register, onSubmit, rating, title, body} = useReview(params);

    const inputClass = `py-2 px-4 border border-gray-300 rounded-md focus:outline-none
    focus:ring-2 focus:ring-red-500 focus:border-transparent`;


  return (
    <form
    className="flex flex-col space-y-4"
    onSubmit={handleSubmit(onSubmit)}
    >
        <FormGroup
        double
        >
            <div
            className="flex flex-col space-y-1"
            >
                <input
                type='text'
                {...register('title', {required: true})}
                placeholder='Review Title'
                id='title'
                value={title}
                disabled={isSubmitting}
                className={inputClass}
                />
                {errors.title && (
                    <div
                    className="flex items-center space-x-1 text-sm text-red-500"
                    >
                        <IoWarningOutline size={20} />
                        <span>{errors.title.message}</span>
                    </div>
                )}
            </div>
            <div
            className="flex flex-col space-y-1"
            >
                <input
                type='number'
                min={0}
                max={5}
                {...register('rating', {required: true})}
                disabled={isSubmitting}
                className={inputClass}
                id='rating'
                placeholder='Rating (0-5)' 
                value={rating}
                />
                {errors.rating && (
                    <div
                    className="flex items-center space-x-1 text-sm text-red-500"
                    >
                        <IoWarningOutline size={20} />
                        <span>{errors.rating.message}</span>
                    </div>
                )}
            </div>
        </FormGroup>
        <FormGroup>
            <div
            className="flex flex-col space-y-1"
            >
                <textarea
                className={inputClass}
                placeholder='Your review goes here...'
                {...register('body', {required: true})}
                id='body'
                value={body}
                disabled={isSubmitting}
                />
                {errors.body && (
                    <div
                    className="flex items-center space-x-1 text-sm text-red-500"
                    >
                        <IoWarningOutline size={20} />
                        <span>{errors.body.message}</span>
                    </div>
                )}
            </div>
        </FormGroup>
        <Button
        disabled={isSubmitting}
        type='submit'
        text='Leave Review'
        className='bg-red-500 hover:bg-red-600 text-white' 
        />
    </form>
  )
}

export default CreateReview