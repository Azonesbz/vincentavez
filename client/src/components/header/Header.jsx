import './Header.css';
import React from 'react';

export default function Header() {
    return (
        <header className='min-h-screen max-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden'>
            <div className='h-[60px] w-full bg-white fixed top-0 z-40 opacity-75 backdrop-blur-sm' />
            <nav className={`container shadow fixed top-0 max-w-full z-50 flex items-center justify-between sm:justify-normal w-full h-[60px] backdrop-blur-md`}>
                <a className='ml-5' href='#'><img src="./logo.webp" alt="logo du site" width={50} /></a>
                <ul className='space-x-10 mr-10 hidden sm:flex items-center ml-10 h-full '>
                    <li className='item-link'><a href={"#actuality"}>Actualité</a></li>
                    <li className='item-link'><a href={"#parcours"}>Parcours</a></li>
                    <li className='item-link'><a href={"#portfolio"}>Portfolio</a></li>
                    <li className='item-link'><a href={"#contact"}>Contact</a></li>
                </ul>
                <div className="absolute left-[20%] bottom-0 flex -mb-px h-[2px] w-56">
                    <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    <div className="-ml-[100%] w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                </div>
                <div className="dropdown sm:hidden">
                    <div className='flex mr-5 space-x-2 items-center'>
                        <svg width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                        <button className="dropbtn ">Menu</button>
                    </div>
                    <div className="dropdown-content">
                        <a href="#actuality">Actualité</a>
                        <a href="#parcours">Parcours</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
            <div>
                <h1 className='text-center'>Vincent vous souhaite la bienvenue !</h1>
                <div className='relative flex flex-col-reverse items-center justify-center '>
                    <img className='image mt-10' src="/me.webp" alt="picture of Vincent" width={200} />
                    <h1 className='font-thin text-2xl text-center gradient-text'>Développeur d'applications web et web mobile</h1>
                </div>
            </div>
            <a
                className='animate-one absolute bottom-5 rounded-full duration-1000'
                href={"#actuality"}
            >
                <svg className='animate-bounce' width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </a>


        </header>
    )
}