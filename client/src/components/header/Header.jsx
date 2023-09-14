import React, { useEffect, useRef, useState } from 'react';
import SocialLink from '../SocialLink';
import Nav from './nav/Nav';


export default function Header() {

    return (
        <header className='min-h-screen max-h-screen flex items-center w-screen overflow-x-hidden max-w-screen px-5 lg:px-48'>
            <Nav />
            


            <img className='absolute inset-0 min-h-screen min-w-screen blur-xl sm:blur-2xl lg:blur-3xl z-0 animate-scale duration-200' src="./halo.png" autoPlay loop />

            <div className='flex flex-col w-full'>

                <div className='flex flex-col sm:flex-row justify-start gap-5 lg:gap-40 w-full items-start z-10'>
                    <div className='relative flex flex-col justify-center items-start'>
                        <i className='text-xl font-bold text-blue-500'>Welcome by</i>
                        <h1 className='font-bold text-5xl lg:text-7xl mt-2 lg:mt-5'>AVEZ Vincent</h1>
                        <h2 className="mt-2">
                            <span className='bg-gradient-to-r from-blue-500 via-green-400 to-green-400 text-transparent bg-clip-text font-medium'>
                                Développeur Web Full Stack.
                            </span> Mais aussi indépendant <br/>dans mon activité.
                        </h2>
                        <button className='mt-5 border border-blue-500 py-2 px-4 rounded-full'>En savoir plus</button>
                    </div>
                    <img className='rounded-full w-40 sm:w-48 md:w-56 lg:w-72' src="/me.webp" alt="picture of Vincent" />
                </div>

                <div className='h-[1px] w-full bg-blue-700 mt-5 lg:mt-10 rounded-full' />

                <div className='flex flex-wrap w-full gap-10 z-10 relative mt-5 lg:mt-10'>
                    <SocialLink className={"flex justify-between sm:justify-normal sm:gap-10 w-full"} />
                </div>

            </div>

            <a
                className='animate-one absolute bottom-0 sm:bottom-5 rounded-full duration-1000 left-[50%] translate-x-[-50%] z-10'
                href={"#skills"}
            >
                <svg className='animate-bounce' width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </a>


        </header>
    )
}