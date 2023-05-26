'use client'

import { useSideBar } from "@/app/store/useSideBar"
import Button from "../ui/Button";
import {FaTimes} from "react-icons/fa"
import Logo from "./Logo";
import MenuList from "./MenuList";

const AsideMenu = () => {
    const {open, closeSideBar} = useSideBar();

  return (
    <div
    className={`
    fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ease-in-out transition-all duration-300 transform ${open ? 'translate-x-0' : '-translate-x-full'}
    `}
    >
      <aside
    className={`
    fixed top-0 left-0 w-[250px] p-2 h-full bg-primary overflow-y-auto ease-in-out transition-all duration-300 transform ${open ? 'translate-x-0' : '-translate-x-full'}
    `}
    >
        <div
        className="flex justify-between items-center py-2"
        >
          <Logo
          icon="text-gray-800" 
          />
          <Button
          type="button"
          onClick={closeSideBar}
          icon={FaTimes}
          className="p-0 text-xl hover:text-red-500" 
          />
        </div>
        <MenuList />
    </aside>
    </div>
  )
}

export default AsideMenu