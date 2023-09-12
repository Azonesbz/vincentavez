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
                    <SocialLink to={""}>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
                        </svg>
                        Instagram
                    </SocialLink>
                    <SocialLink to={""}>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
                        </svg>
                        Discord
                    </SocialLink>
                    <SocialLink to={""}>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z"></path>
                        </svg>
                        Linkedin
                    </SocialLink>
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