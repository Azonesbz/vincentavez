import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Career() {

    const contentHtmlRef = useRef(null);
    const contentCssRef = useRef(null);
    const contentJsRef = useRef(null);
    const contentReactRef = useRef(null);
    const contentNodejsRef = useRef(null);

    const [htmlCompetence, setHtmlCompetence] = useState(false)
    const [cssCompetence, setCssCompetence] = useState(false)
    const [jsCompetence, setJsCompetence] = useState(false)
    const [reactCompetence, setReactCompetence] = useState(false)
    const [nodejsCompetence, setNodejsCompetence] = useState(false)

    useEffect(() => {
        const contentHtmlElement = contentHtmlRef.current;
        const contentCssElement = contentCssRef.current;
        const contentJsElement = contentJsRef.current;
        const contentReactElement = contentReactRef.current;
        const contentNodejsElement = contentNodejsRef.current;

        contentHtmlElement.style.height = htmlCompetence ? `${contentHtmlElement.scrollHeight}px` : '0px';
        contentCssElement.style.height = cssCompetence ? `${contentCssElement.scrollHeight}px` : '0px';
        contentJsElement.style.height = jsCompetence ? `${contentJsElement.scrollHeight}px` : '0px';
        contentReactElement.style.height = reactCompetence ? `${contentReactElement.scrollHeight}px` : '0px';
        contentNodejsElement.style.height = nodejsCompetence ? `${contentNodejsElement.scrollHeight}px` : '0px';
    }, [htmlCompetence, cssCompetence, jsCompetence, reactCompetence, nodejsCompetence]);

    return (
        <>
            <section className="container min-h-screen mt-10 flex-grow w-full relative z-1 py-24" id="parcours">
                <h1 className="font-light relative z-0">Le parcours de Vincent</h1>
                <img className='absolute inset-0 z-1 blur-xl' src="/blurblue.png" alt="blur image" />
                <img className='absolute top-72 right-96 z-1 rotate-180 blur-2xl' src="/blurblue.png" alt="blur image" />
                <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-r-xl shadow mr-auto relative z-2">
                    <h2>Je m'appelle Vincent, et j'ai 19 ans.</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Je suis passionné par tout ce qui s'apprend ! Le métier de développeur est fascinant, à partir de rien, vous pouvez construire le projet de vos rêves, et c'est exactement pour cela que nous en sommes ici aujourd'hui avec <Link className="text-indigo-800" to="https://sycatle.dev">Sycatle.dev</Link></p>
                        <p className="mt-5"></p>
                    </div>
                </div>
                <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-l-xl shadow ml-auto relative z-2">
                    <h2>D'où je viens ?</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Né à Saint-Mandé, dans le Val-de-Marne, je suis quelqu'un de très logique et créatif. Depuis tout petit j'aime trouver la solution aux problèmes que je rencontre, j'aime aussi dessiner et construire des choses !</p>
                        <p className="mt-5"></p>
                    </div>
                </div>
                <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-r-xl shadow mr-auto relative z-2">
                    <h2>Maintenant</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Je suis à la recherche de "The entreprise !" pour septembre prochain. J'ai pour ambition d'apprendre les langages <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">TypeScript</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">NextJS</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">Prisma</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">GraphQL</Link>. </p>
                        <p className="mt-5">Avant toutes chose, j'ai besoin d'un projet stimulant, intéressant, et pour lequel je partage des valeurs similaires.</p>
                        <p className="mt-5">Je suis ouvert à toute proposition, veuillez me contacter sur mon adresse mail. <Link to="#contact" className="text-indigo-800">Ici</Link></p>
                    </div>
                </div>
                <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-l-xl shadow ml-auto relative z-2 flex flex-col space-y-5">
                    <h2>Compétences</h2>
                    <div className="relative" onClick={() => htmlCompetence ? setHtmlCompetence(false) : setHtmlCompetence(true)}>
                        <div className='flex mr-5 space-x-2 items-center'>
                            <svg className={`duration-500 ${htmlCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <h3 className="cursor-pointer">HTML</h3>
                        </div>
                        <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                            <div
                                ref={contentHtmlRef}
                                className="transition-height duration-500 ease-out"
                            >
                                <p>
                                    Comme tout le monde, j'ai commencé par apprendre le langage HTML. Un langage de balises permettant de construire le squelette de votre application.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative" onClick={() => cssCompetence ? setCssCompetence(false) : setCssCompetence(true)}>
                        <div className='flex mr-5 space-x-2 items-center'>
                            <svg className={`duration-500 ${cssCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <h3 className="cursor-pointer">CSS</h3>
                        </div>
                        <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                            <div
                                ref={contentCssRef}
                                className="transition-height duration-500 ease-out"
                            >
                                <p>
                                    Comme tout le monde, j'ai commencé par apprendre le langage HTML. Un langage de balises permettant de construire le squelette de votre application.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative" onClick={() => jsCompetence ? setJsCompetence(false) : setJsCompetence(true)}>
                        <div className='flex mr-5 space-x-2 items-center'>
                            <svg className={`duration-500 ${jsCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <h3 className="cursor-pointer">JavaScript</h3>
                        </div>
                        <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                            <div
                                ref={contentJsRef}
                                className="transition-height duration-500 ease-out"
                            >
                                <p>
                                    Comme tout le monde, j'ai commencé par apprendre le langage HTML. Un langage de balises permettant de construire le squelette de votre application.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative" onClick={() => reactCompetence ? setReactCompetence(false) : setReactCompetence(true)}>
                        <div className='flex mr-5 space-x-2 items-center'>
                            <svg className={`duration-500 ${reactCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <h3 className="cursor-pointer">React.js</h3>
                        </div>
                        <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                            <div
                                ref={contentReactRef}
                                className="transition-height duration-500 ease-out"
                            >
                                <p>
                                    Comme tout le monde, j'ai commencé par apprendre le langage HTML. Un langage de balises permettant de construire le squelette de votre application.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative" onClick={() => nodejsCompetence ? setNodejsCompetence(false) : setNodejsCompetence(true)}>
                        <div className='flex mr-5 space-x-2 items-center'>
                            <svg className={`duration-500 ${nodejsCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <h3 className="cursor-pointer">NodeJS</h3>
                        </div>
                        <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                            <div
                                ref={contentNodejsRef}
                                className="transition-height duration-500 ease-out"
                            >
                                <p>
                                    Comme tout le monde, j'ai commencé par apprendre le langage HTML. Un langage de balises permettant de construire le squelette de votre application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}