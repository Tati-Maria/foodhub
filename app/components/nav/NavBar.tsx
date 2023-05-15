'use client'
import Logo from "./Logo";
import Button from "../ui/Button";
import { useSideBar } from "@/app/store/useSideBar";
import {FaBars} from "react-icons/fa";
import AsideMenu from "./AsideMenu";
import {BsFillBasket2Fill} from "react-icons/bs";
import { useOpenCart } from "@/app/store/useOpenCart";

const NavBar = () => {
  const {open, openSideBar, closeSideBar} = useSideBar();
  const {cart, openCart, closeCart} = useOpenCart();

  return (
    <nav
    className="flex items-center justify-between py-4"
    >
        <Logo />
        <div
        className="flex items-center"
        >
          <Button
          type="button"
          onClick={cart ? closeCart : openCart}
          icon={BsFillBasket2Fill}
          className="p-0 text-xl hover:text-red-500"
          />
          <Button
          type="button"
          onClick={open ? closeSideBar : openSideBar}
          icon={FaBars}
          className="p-0 text-xl hover:text-red-500" 
          />
        </div>
        {open && <AsideMenu />}
    </nav>
  )
}

export default NavBar