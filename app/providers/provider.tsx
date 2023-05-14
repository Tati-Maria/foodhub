'use client'

import {SessionProvider} from "next-auth/react";
import {Toaster} from "react-hot-toast";


const Provider = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                style: {
                    background: '#48BB78',
                    color: '#fff',
                }
            }}
            />
            {children}
        </SessionProvider>
    )
}

export default Provider;