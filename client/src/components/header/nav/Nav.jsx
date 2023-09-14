import Menu from "../../menu/Menu"
import BurgerMenu from "../BurgerMenu"

const Nav = () => {
    return (
        <nav
            className={`absolute top-0 left-0 z-40 w-full flex items-center justify-between backdrop-blur-md h-[60px] px-5 lg:px-48 duration-200
                `}>
            <a className='flex items-center gap-5' href='#'><img className='rounded-full' src="/Vincent_2_.webp" alt="logo du site" width={50} /></a>

            <ul className='space-x-10 hidden sm:flex items-center h-full uppercase text-sm font-medium mx-auto'>
                <li><a href={"#courses"}>Courses</a></li>
                <li><a href={"#skills"}>Skills</a></li>
                <a href='#'><img className='rounded-full' src="/Vincent_2_.webp" alt="logo du site" width={50} /></a>
                <li><a href={"#projects"}>Projects</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>

            <BurgerMenu />
            <Menu />
        </nav>
    )
}

export default Nav