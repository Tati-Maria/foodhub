'use client'
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import MenuItem from "./MenuItem"
import {AiOutlineHome} from "react-icons/ai"
import { GrRestaurant } from "react-icons/gr"
import {IoRestaurant} from "react-icons/io5"
import {FiHelpCircle} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"
import { useSideBar } from "@/app/store/useSideBar"
import Button from "../ui/Button"

//part of sidebar

const MenuList = () => {
  const {status} = useSession();
  const {closeSideBar} = useSideBar();
  const router = useRouter();

  return (
    <>
      <ul
      className="flex flex-col items-start space-y-4 w-full my-6"
      >
        <MenuItem 
        text="Home" 
        route="/"
        icon={AiOutlineHome}
        />
        <MenuItem 
        text="Restaurants" 
        route="/restaurants"
        icon={IoRestaurant} 
        />
        <MenuItem 
        text="About" 
        route="/about"
        icon={GrRestaurant}
        />
        <MenuItem 
        text="Help" 
        route="/help"
        icon={FiHelpCircle}
        />
        {status === "authenticated" && (
          <MenuItem
          text="Profile"
          route="/profile"
          icon={CgProfile}
          />
        )}
    </ul>
    {status === "authenticated" ? (
      <Button
      type="button"
      text="Sign Out"
      onClick={() => signOut()}
      className="text-red-500 w-full font-medium text-base md:text-lg px-2 py-1 rounded-md hover:bg-gray-100 hover:text-gray-950 transition duration-200 ease-in-out"
      />
    ) : (
      <Button
      type="button"
      text="Sign In"
      onClick={() => router.push("/login")}
      className="w-full text-base md:text-lg font-medium text-gray-800 px-2 py-1 rounded-md hover:bg-gray-100 hover:text-gray-950 transition duration-200 ease-in-out"
      />
    )}
    </>
  )
}

export default MenuList;