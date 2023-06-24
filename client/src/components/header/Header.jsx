import './header.css';
import React from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className='min-h-screen max-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
            <nav className={`flex items-center justify-between sm:justify-normal p-1 shadow fixed top-0 z-10 w-full bg-white duration-200 h-[60px]`}>
                <a href='.'><img src="./VincentAvez.webp" alt="logo du site" width={100} /></a>
                <ul className='space-x-10 mr-10 hidden sm:flex items-center border-l-[1px] border-stone-400 pl-5 ml-5 h-full '>
                    <li className='item-link'><a href={"#actuality"}>Actualité</a></li>
                    <li className='item-link'><a href={"#parcours"}>Parcours</a></li>
                    <li className='item-link'><a href={"#portfolio"}>Portfolio</a></li>
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
                    </div>
                </div>
            </nav>

            <h1 className='text-center'>Vincent vous souhaite la bienvenue !</h1>
            <div className='relative flex flex-col-reverse items-center justify-center '>
                <img className='m-auto image mt-10' src="/me.webp" alt="" width={250} />
                <h1 className='font-thin text-2xl text-center gradient-text'>Développeur d'applications web et web mobile</h1>
            </div>
            <a
                className='animate-one absolute bottom-5 border-[3px] border-black rounded-full duration-1000'
                href={"#actuality"}
            >
                <svg
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                </svg>
            </a>


        </header>
    )
}