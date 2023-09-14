import { Link } from "react-router-dom"
import Menu from "../../menu/Menu"
import BurgerMenu from "../BurgerMenu"

const Nav = () => {
    return (
        <nav className={`absolute top-0 left-0 z-40 w-full flex items-center justify-between sm:justify-normal sm:gap-10 backdrop-blur-md h-[60px] px-5 lg:px-48 duration-200`}>

            <Link className='flex items-center gap-5 h-10 w-10' to={'.'}><img className='rounded-full' src="/Vincent_2_.webp" alt="logo du site" width={50} /></Link>

            <ul className='space-x-10 hidden sm:flex items-center h-full uppercase text-sm font-medium'>
                <li><a href={"#courses"}>Courses</a></li>
                <li><a href={"#skills"}>Skills</a></li>
                <li><a href={"#projects"}>Projects</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>

            <BurgerMenu />
            <Menu />

        </nav>
    )
}

export default Nav