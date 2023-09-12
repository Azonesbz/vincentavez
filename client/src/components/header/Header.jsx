import React, { useEffect, useRef, useState } from 'react';
import SocialLink from '../SocialLink';


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
        <header className='min-h-screen max-h-screen flex items-center w-screen overflow-x-hidden max-w-screen bg-[#000249] px-48 text-white'>
            <nav 
                className={`fixed left-0 top-0 z-50 flex items-center w-full backdrop-blur-md h-[60px] px-48 
                ${scrollPosition >= window.innerHeight - 20 ? "text-black" : "text-white"}
                ${scrollPosition >= 15 ? "shadow" : null}
                `}>
                
                <img className='rounded-full w-10' src="/me.webp" alt="picture of Vincent" />

                <ul className='space-x-10 hidden sm:flex items-center h-full uppercase text-sm font-medium mx-auto'>
                    <li><a href={"#courses"}>Courses</a></li>
                    <li><a href={"#skills"}>Skills</a></li>
                    <a className='ml-5' href='#'><img src="./logo.webp" alt="logo du site" width={50} /></a>
                    <li><a href={"#projects"}>Projects</a></li>
                    <li><a href={"#contact"}>Contact</a></li>
                </ul>

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

            <img className='absolute inset-0 min-h-screen min-w-screen blur-3xl z-0 animate-scale duration-200' src="./halo.png" autoPlay loop />

            <div>

                <div className='flex justify-start gap-40 w-full items-start z-10'>
                    <div className='relative flex flex-col justify-center items-start'>
                        <i className='text-xl font-bold text-blue-500'>Welcome by</i>
                        <h1 className='text-center font-bold text-7xl mt-5'>AVEZ Vincent</h1>
                        <h2 className="mt-2 w-[600px]">
                            <span className='bg-gradient-to-r from-blue-500 via-green-400 to-green-400 text-transparent bg-clip-text font-medium'>
                                Développeur Web Full Stack. 
                            </span> Mais aussi indépendant dans mon activité.
                        </h2>
                        <button className='mt-5 border border-blue-500 py-2 px-4 rounded-full'>En savoir plus</button>
                    </div>
                    <img className='rounded-full w-40 sm:w-48 md:w-56 lg:w-72' src="/me.webp" alt="picture of Vincent" />
                </div>

                <div className='h-[1px] w-full bg-blue-700 mt-10 rounded-full' />

                <div className='flex flex-wrap gap-10 z-10 relative mt-10'>
                    <SocialLink className={"flex"} />
                </div>

            </div>

            <a
                className='animate-one absolute bottom-0 sm:bottom-5 rounded-full duration-1000 left-[50%] translate-x-[-50%] z-10'
                href={"#courses"}
            >
                <svg className='animate-bounce' width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </a>


        </header>
    )
}