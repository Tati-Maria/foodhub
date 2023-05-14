import MenuItem from "./MenuItem"


const MenuList = () => {

  return (
    <ul
    className="hidden lg:flex items-center justify-between space-x-4"
    >
        <MenuItem text="Home" route="/" />
        <MenuItem text="Restaurants" route="/restaurants" />
        <MenuItem text="About" route="/about" />
        <MenuItem text="Contact" route="/contact" />
    </ul>
  )
}

export default MenuList;