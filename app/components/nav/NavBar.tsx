'use client'
import Logo from "./Logo";
import Button from "../ui/Button";
import { useSideBar } from "@/app/store/useSideBar";
import {FaBars} from "react-icons/fa";
import AsideMenu from "./AsideMenu";
import Cart from "./Cart";


const NavBar = () => {
  const {open, openSideBar, closeSideBar} = useSideBar();

  return (
    <nav
    className="flex items-center justify-between py-6"
    >
        <Logo 
        icon="text-primary"
        />
        <div
        className="flex items-center"
        >
          <Button
          type="button"
          onClick={open ? closeSideBar : openSideBar}
          icon={FaBars}
          className="p-0 text-2xl hover:text-red-500" 
          />
        </div>
        {open && <AsideMenu />}
    </nav>
  )
}

export default NavBar