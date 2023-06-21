import './header.css';
import React, { useContext } from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";

export default function Header(){
    const actualityRef = useRef(null);
    const parcoursRef = useRef(null);
    const portfolioRef = useRef(null);
    return (
        <header className='min-h-screen flex-col items-center justify-center'>
            <nav className='flex items-center p-1 justify-between shadow relative inset-0 z-10'>
                <img src="./VincentAvez.png" alt="logo du site" height={120} />
                <ul className='flex space-x-10 mr-10'>
                    <li className='item-link'><Link to={"#actuality"} onClick={() => actualityRef.current.scrollIntoView()}>Actualité</Link></li>
                    <li className='item-link'><Link to={"#parcours"} onClick={() => parcoursRef.current.scrollIntoView()}>Parcours</Link></li>
                    <li className='item-link'><Link to={"#portfolio"} onClick={() => portfolioRef.current.scrollIntoView()}>Portfolio</Link></li>
                </ul>
            </nav>
            <img className='absolute z-0 rotate-180 blur-2xl' src="/blurblue.png" alt="blur image" />
            <div className="absolute left-48 flex -mb-px h-[2px] w-56">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
            </div>
            <div className='container items-center justify-center grid grid-cols-6 min-h-screen absolute inset-0'>
                <h1 className='col-span-3'><span className='gradient-text'>Vincent </span>vous souhaite la bienvenue !</h1>
                <div className='relative col-span-3 flex-col items-center justify-center p-10'>
                    <img className='m-auto image' src="/me.jpg" alt="" width={250} />
                    <h2 className='text-center mt-5'>Développeur d'applications web et web mobile</h2>
                </div>
            </div>
            
        </header>
    )
}