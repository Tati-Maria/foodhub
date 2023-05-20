'use client'
//error display
import Image from "next/image"

export default function Error() {
    return (
        <div className='
        flex
        justify-center
        items-center
        h-screen
        '>
            <div className='
            flex
            flex-col
            items-center
            gap-4
            '>
                <h2 className='
                text-4xl
                font-semibold
                text-gray-100
                '>
                    Oops! Something went wrong.
                </h2>
                <p className='
                text-gray-400
                text-center
                '>
                    We&apos;re having some trouble loading this page. Please try again later or refresh.
                </p>
            </div>
        </div>
    )
}