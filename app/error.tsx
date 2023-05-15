'use client'
//error display

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
                <h1 className='
                text-4xl
                font-semibold
                text-gray-800
                '>
                    Oops! Something went wrong.
                </h1>
                <p className='
                text-gray-600
                text-center
                '>
                    We&apos;re having some trouble loading this page. Please try again later or refresh.
                </p>
            </div>
        </div>
    )
}