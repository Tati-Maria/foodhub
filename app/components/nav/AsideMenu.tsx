'use client'

import { useSideBar } from "@/app/store/useSideBar"
import Button from "../ui/Button";
import {FaTimes} from "react-icons/fa"
import Logo from "./Logo";
import MenuList from "./MenuList";

const AsideMenu = () => {
    const {open, closeSideBar} = useSideBar();

  return (
    <aside
    className={`aside ${open ? 'active' : ''} py-4 px-2 md:px-4`}
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
  )
}

export default AsideMenu