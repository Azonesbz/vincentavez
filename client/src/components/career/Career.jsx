import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Career.css"

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

    let handleReduceCompetence = () => {
        setHtmlCompetence(false)
        setCssCompetence(false)
        setJsCompetence(false)
        setReactCompetence(false)
        setNodejsCompetence(false)
    }

    return (
        <>
            <section className="container min-h-screen mt-10 flex-grow w-full relative z-1 py-24" id="parcours">
                <h2 className="relative z-0">Le parcours de Vincent</h2>
                <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-r-xl shadow-xl mr-auto relative z-2">
                    <div className="flex justify-between items-center">
                        <h3>Je m'appelle Vincent, et j'ai 19 ans.</h3>

                        <div className="info">
                            <div className='flex mr-5 space-x-2 items-center'>
                                <svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                                    <path d="M12 8h.01"></path>
                                    <path d="M11 12h1v4h1"></path>
                                </svg>
                            </div>
                            <div className="info-content">
                                <p>Je suis né le 22 juillet, dans le Val-de-Marne(94) à Saint-Mandé 😉</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Je suis passionné par tout ce qui s'apprend ! Le métier de développeur est fascinant, à partir de rien, vous pouvez construire le projet de vos rêves, et c'est exactement pour cela que nous en sommes ici aujourd'hui avec <Link className="text-indigo-800" to="https://sycatle.dev">Sycatle.dev</Link></p>
                        <p className="mt-5"></p>
                    </div>
                </div>
                <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-l-xl shadow-xl ml-auto relative z-2">
                    <div className="flex justify-between items-center">
                        <h3>D'où je viens ?</h3>
                    </div>
                        <div className="flex flex-col space-y-5">
                            <p className="mt-5">Né à Saint-Mandé, dans le Val-de-Marne, je suis quelqu'un de très logique et créatif. Depuis tout petit j'aime trouver la solution aux problèmes que je rencontre, j'aime aussi dessiner et construire des choses !</p>
                            <p className="mt-5"></p>
                        </div>
                    </div>
                    <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-r-xl shadow-xl mr-auto relative z-2">
                        <h3>Maintenant</h3>
                        <div className="flex flex-col space-y-5">
                            <p className="mt-5">Je suis à la recherche de "The entreprise !" pour septembre prochain. J'ai pour ambition d'apprendre les langages <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">TypeScript</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">NextJS</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">Prisma</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">GraphQL</Link>. </p>
                            <p className="mt-5">Avant toutes chose, j'ai besoin d'un projet stimulant, intéressant, et pour lequel je partage des valeurs similaires.</p>
                            <p className="mt-5">Je suis ouvert à toute proposition, veuillez me contacter sur mon adresse mail. <a href="#contact" className="text-indigo-800">Ici</a></p>
                        </div>
                    </div>
                    <div className="bg-stone-200 w-[90%] sm:w-[60%] mt-10 p-5 rounded-l-xl shadow-xl ml-auto relative z-2 flex flex-col space-y-5">
                        <div className="flex items-center justify-between">
                            <h3>Compétences</h3>
                            <button onClick={handleReduceCompetence}>
                                <svg width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                                    <path d="M9 12h6"></path>
                                </svg>
                            </button>

                        </div>
                        <div className="relative" onClick={() => htmlCompetence ? setHtmlCompetence(false) : setHtmlCompetence(true)}>
                            <div className='flex mr-5 space-x-2 items-center'>
                                <svg className={`duration-500 ${htmlCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <h4 className="cursor-pointer">HTML</h4>
                            </div>
                            <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                                <div
                                    ref={contentHtmlRef}
                                    className="transition-height duration-500 ease-out"
                                >
                                    <p>
                                        Comme tout le monde, j'ai commencé par apprendre le langage HTML. Un <strong className="text-indigo-800">langage de balises</strong> permettant de construire le squelette de votre application.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative" onClick={() => cssCompetence ? setCssCompetence(false) : setCssCompetence(true)}>
                            <div className='flex mr-5 space-x-2 items-center'>
                                <svg className={`duration-500 ${cssCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <h4 className="cursor-pointer">CSS</h4>
                            </div>
                            <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                                <div
                                    ref={contentCssRef}
                                    className="flex flex-col space-y-2 transition-height duration-500 ease-out"
                                >
                                    <p>
                                        Je suis pas un adepte du CSS, mais je me débrouille !
                                    </p>
                                    <p>
                                        J'aime beaucoup la librairie de <Link to={`https://tailwindcss.com`} target="_blank" className="text-indigo-800">TailwindCSS</Link>, à ne pas confondre avec Bootstrap !
                                        Elle est <strong className="text-indigo-800">très utile</strong> pour un développeur qui souhaite ne pas passer des heures à faire un site esthétique mais sans que ça devienne une contrainte de design.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative" onClick={() => jsCompetence ? setJsCompetence(false) : setJsCompetence(true)}>
                            <div className='flex mr-5 space-x-2 items-center'>
                                <svg className={`duration-500 ${jsCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <h4 className="cursor-pointer">JavaScript</h4>
                            </div>
                            <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                                <div
                                    ref={contentJsRef}
                                    className="transition-height duration-500 ease-out"
                                >
                                    <p>
                                        Ahhhh le javascript !
                                    </p>
                                    <p>
                                        Que dire de ce language ! <span className="text-indigo-800">Parfait pour un débutant</span>, le seul défaut, le typage.. Mais un problème à toujours une solution, <span className="text-indigo-800">Typescript</span>  est la solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative" onClick={() => reactCompetence ? setReactCompetence(false) : setReactCompetence(true)}>
                            <div className='flex mr-5 space-x-2 items-center'>
                                <svg className={`duration-500 ${reactCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <h4 className="cursor-pointer">React.js</h4>
                            </div>
                            <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                                <div
                                    ref={contentReactRef}
                                    className="transition-height duration-500 ease-out flex flex-col space-y-2"
                                >
                                    <p>
                                        React est un <span className="text-indigo-800">très bon langage</span> ! Au début je travaillais avec EJS(un moteur de template de NodeJS),
                                        puis <span className="text-indigo-800">je suis passé sur React</span>, et <span className="text-indigo-800">depuis je vois en couleur</span>!
                                    </p>
                                    <p>
                                        Une fois que les bases sont assimilé, c'est un jeu d'enfant !
                                        Il faut bien sur compter sur un <span className="text-indigo-800">travail régulier pour progresser</span> plus spécifiquement mais c'est comme tout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative" onClick={() => nodejsCompetence ? setNodejsCompetence(false) : setNodejsCompetence(true)}>
                            <div className='flex mr-5 space-x-2 items-center'>
                                <svg className={`duration-500 ${nodejsCompetence ? "" : "rotate-180"}`} width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <h4 className="cursor-pointer">NodeJS</h4>
                            </div>
                            <div className="border-l-[1px] border-stone-400 pl-2 ml-3 overflow-hidden">
                                <div
                                    ref={contentNodejsRef}
                                    className="transition-height duration-500 ease-out"
                                >
                                    <p>
                                        Nous arrivons au langage de programmation orienté serveur, nous sommes toujours sur du javascript par contre !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}