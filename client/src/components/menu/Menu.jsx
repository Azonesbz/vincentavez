import { useBurgerMenu } from "../header/BurgerMenu"

const Menu = () => {
    const {isOpen} = useBurgerMenu()
    return (
        <menu className={`bg-[#3a5068] fixed top-0 min-h-screen max-h-screen w-2/3 z-30 duration-200 ${isOpen ? "right-0" : "-right-full"}`}>

        </menu>
    )
}

export default Menu