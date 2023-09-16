
import { useState } from "react";
import { useRef } from "react";
import SocialLink from "../SocialLink";

export default function Footer(){
    const imgRef = useRef(null)
    const [copy, setCopy] = useState(false)
    const textToCopy = 'https://vincentavez.com';

    const handleCopy = () => {
        if(copy){
            return
        }
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopy(true)
                setTimeout(() => {
                    return setCopy(false)
                }, 1000)

            })
    }

    return (
        <>
            {copy ? <div className="absolute min-h-screen min-w-screen z-50"><p className={`fixed font-light top-[1%] left-[1%] italic bg-stone-200 rounded py-2 px-5`}>Vous avez copié le lien du site</p></div> : ""}
            <footer className="container py-10 ">
                <div className="flex flex-col items-center justify-center">
                    <a href={"/"} className="w-full flex justify-center" ref={imgRef}>
                        <img className="rounded-full" src="Vincent_2_.webp" alt="logo" width={100} height={100} />
                    </a>
                    <SocialLink className={"flex gap-10 mt-5"} handleCopy={handleCopy} />
                </div>
                <footer className="pt-5 flex justify-center min-w-screen">
                    <i className="text-sm text-stone-500 mx-auto border-t-[1px] w-96 text-center border-stone-400 pt-5">Copyright © 2023 Azones Inc. All Rights Reserved.</i>
                </footer>
            </footer>
        </>
    )
}