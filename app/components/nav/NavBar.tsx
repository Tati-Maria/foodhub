'use client'
import LoginModal from "../auth/LoginModal"
import { signOut, useSession } from "next-auth/react"
import useLoginModal from "@/app/store/useLoginModal"
import Logo from "./Logo"
import MenuList from "./MenuList"
import Button from "../ui/Button"

const NavBar = () => {
  const {data: session, status} = useSession();
  const {isOpen, openModal, closeModal} = useLoginModal();

  return (
    <nav
    className="flex items-center justify-between py-4"
    >
        <Logo />
        <MenuList />
        {status === 'authenticated' ? (
          <Button
          className="border border-red-500 text-red-500 py-2 px-4 rounded hover:shadow-md transition-shadow"
          type='button'
          text='Logout'
          onClick={() => signOut()}
          />
        ) : (
          <Button
          className="border border-gray-800 py-2 px-4 rounded hover:shadow-md transition-shadow"
          type='button'
          text='Login'
          onClick={openModal}
          />
        )}
        {isOpen && <LoginModal onClose={closeModal} />}
    </nav>
  )
}

export default NavBar