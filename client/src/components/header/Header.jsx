import './header.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header className='min-h-screen flex-col items-center justify-center'>
            <nav className='flex items-center p-1 justify-between shadow relative inset-0 z-10'>
                <img src="./VincentAvez.png" alt="logo du site" height={120} />
                <ul className='flex space-x-8 mr-10'>
                    <li><Link to={"#Actualité"}>Actualité</Link></li>
                    <li><Link to={"#Parcours"}>Parcours</Link></li>
                    <li><Link to={"#Portfolio"}>Portfolio</Link></li>
                </ul>
            </nav>
            <img className='absolute z-0' src="/blurblue.png" alt="blur image" />
            <div className="absolute left-48 flex -mb-px h-[2px] w-56">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
            </div>
            <div className='container flex items-center'>
                <h1><span className='gradient-text'>Vincent Avez </span>vous souhaite la bienvenue !</h1>
                <div>
                    <img src="/me.png" alt="" />
                    <img src="/VincentAvezWhite.png" alt="" />
                </div>
            </div>
            
        </header>
    )
}