'use client'
import Logo from "./Logo";
import Button from "../ui/Button";
import { useSideBar } from "@/app/store/useSideBar";
import {FaBars} from "react-icons/fa";
import { styled } from '@mui/material/styles';
import AsideMenu from "./AsideMenu";
import IconButton from "@mui/material/IconButton";
import {IoCartOutline} from "react-icons/io5";
import Badge  from "@mui/material/Badge";
import { useRouter } from "next/navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const NavBar = () => {
  const {open, openSideBar, closeSideBar} = useSideBar();
  const router = useRouter();

  return (
    <nav
    className="flex items-center justify-between py-6"
    >
        <Logo 
        />
        <div
        className="flex items-center"
        >
         <IconButton 
         aria-label="cart"
         onClick={() => router.push("/cart")}
         >
            <Badge badgeContent={4} color="warning">
              <IoCartOutline size={30} className="text-white" />
            </Badge>
          </IconButton> 
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