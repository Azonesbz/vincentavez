import './Header.css';
import React, { useEffect, useRef, useState } from 'react';


export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [dropdown, setDropdown] = useState(false)

    const dropdownRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const dropdownContent = dropdownRef.current;
        dropdownContent.style.height = dropdown ? `${150}px` : '0px';

    }, [dropdown]);

    let handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    

    return (
        <header className='container min-h-screen max-h-screen flex items-center w-full overflow-x-hidden sm:p-10 justify-around'>
            <div className={`h-[60px] w-full bg-white fixed top-0 z-40 opacity-75 backdrop-blur-xl ${scrollPosition >= 15 ? "shadow" : "" }`} />
            <div className={`h-[60px] w-full bg-white fixed top-0 z-40 opacity-50 backdrop-blur-sm mix-blend-color ${scrollPosition >= 15 ? "shadow" : "" }`} />
            <nav className={` fixed top-0 z-50 flex items-center justify-between w-full sm:justify-center h-[60px]`}>
                
                <ul className='space-x-10 mr-10 hidden sm:flex items-center ml-10 h-full uppercase '>
                    <li className='item-link'><a className='text-[1rem]' href={"#actuality"}>Actualité</a></li>
                    <li className='item-link'><a href={"#parcours"}>Parcours</a></li>
                    <a className='ml-5' href='#'><img src="./logo.webp" alt="logo du site" width={50} /></a>
                    <li className='item-link'><a href={"#portfolio"}>Portfolio</a></li>
                    <li className='item-link'><a href={"#contact"}>Contact</a></li>
                </ul>
                <div className="absolute right-[50%] translate-x-[50%] bottom-0 flex -mb-px h-[2px] w-56">
                    <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    <div className="-ml-[100%] w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                </div>
                <div className="flex items-center justify-between w-full sm:hidden">
                    <a className='ml-5' href='#'><img src="./logo.webp" alt="logo du site" width={50} /></a>
                    <div className='dropdown'>
                        <div className='flex mr-5 space-x-2 items-center' onClick={() => dropdown ? setDropdown(false) : setDropdown(true)}>
                            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M20.05 11H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95Z"></path>
                                <path d="M20.05 16H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95Z"></path>
                                <path d="M20.05 6H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95Z"></path>
                            </svg>
                        </div>
                        <div className={`dropdown-content duration-500 ease-out flex flex-col overflow-hidden shadow ${dropdown ? " h-auto" : "h-0 "}`} ref={dropdownRef} onClick={() => setDropdown(false)}>
                            <a href="#actuality">Actualité</a>
                            <a href="#parcours">Parcours</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div>
                <h1 className='text-center'>Vincent vous souhaite la bienvenue !</h1>
                <div className='relative flex flex-col-reverse items-center justify-center '>
                    <img className='image mt-5 sm:mt-10 w-40 sm:w-48 md:w-56 lg:w-72' src="/me.webp" alt="picture of Vincent" />
                    <div className='text-center '>
                        <h2 class="title">Développeur web React/NodeJS
                            <div class="aurora">
                                <div class="aurora__item"></div>
                                <div class="aurora__item"></div>
                                <div class="aurora__item"></div>
                                <div class="aurora__item"></div>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>

            <a
                className='animate-one absolute bottom-0 sm:bottom-5 rounded-full duration-1000 left-[50%] translate-x-[-50%]'
                href={"#actuality"}
            >
                <svg className='animate-bounce' width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </a>


        </header>
    )
}