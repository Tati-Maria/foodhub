import {TiTimes} from 'react-icons/ti'
import Button from '../ui/Button';
import {signIn} from "next-auth/react"
import Title from '../ui/Title';

type LoginModalProps = {
    onClose: () => void;
}

const LoginModal = ({onClose}: LoginModalProps) => {
  return (
    <div
        className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50`}
    >
        <div
        className='relative flex flex-col items-center justify-center w-full max-w-md p-6 mx-auto bg-gray-950 rounded-md shadow-lg'
        >
            <Button
            type='button'
            className='absolute top-0 right-0 mt-4 mr-4 bg-transparent text-xl text-red-600 md:text-2xl hover:text-red-500 transition-colors'
            onClick={onClose}
            icon={TiTimes} 
            />
            <div
            className='flex flex-col items-center justify-center w-full space-y-4'
            >
                <Title title='Login' />
                <Button
                className='w-full border border-gray-800 py-3 rounded hover:shadow-md transition-shadow'
                type='button'
                onClick={() => signIn('google', {callbackUrl: '/'})}
                text='Login with Google' 
                />
                <Button
                className='w-full bg-blue-600 text-white py-3 rounded hover:shadow-md transition-shadow'
                type='button'
                onClick={() => signIn('facebook', {callbackUrl: '/'})}
                text='Login with Facebook' 
                />
                <Button
                className='w-full bg-gray-800 text-white py-3 rounded hover:shadow-md transition-shadow'
                type='button'
                text='Login with Discord'
                onClick={() => signIn('discord', {callbackUrl: '/'})} 
                />
            </div>
        </div>
    </div>
  )
}

export default LoginModal