'use client'
import Image from "next/image"
import Button from "../components/ui/Button"
import Title from "../components/ui/Title"
import { signIn } from "next-auth/react"


const LoginPage = () => {
    
  return (
    <div
    className="grid place-items-center h-screen relative"
    >
        <div
        className='relative flex space-y-4 flex-col items-center justify-center w-full max-w-md p-6 mx-auto bg-gray-950 rounded-md shadow-lg md:max-w-2xl'
        >
                <Title 
                title='Login'
                className='text-4xl text-center text-gray-100' 
                />
                <Button
                className='w-full border border-gray-800 py-3 rounded hover:shadow-md hover:shadow-black transition-shadow'
                type='button'
                onClick={() => signIn('google', {callbackUrl: '/'})}
                text='Login with Google' 
                />
                <Button
                className='w-full bg-blue-600 text-white py-3 rounded hover:shadow-md hover:shadow-black transition-shadow'
                type='button'
                onClick={() => signIn('facebook', {callbackUrl: '/'})}
                text='Login with Facebook' 
                />
                <Button
                className='w-full bg-gray-800 text-white py-3 rounded hover:shadow-md hover:shadow-black transition-shadow'
                type='button'
                text='Login with Discord'
                onClick={() => signIn('discord', {callbackUrl: '/'})} 
                />
        </div>
    </div>
  )
}

export default LoginPage