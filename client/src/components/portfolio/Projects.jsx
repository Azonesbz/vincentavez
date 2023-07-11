import useEmblaCarousel from 'embla-carousel-react'
import LazyLoad from 'react-lazyload'
import { Link } from "react-router-dom"

const embla_OPTIONS = {
    loop: true,
    align: 'center',
}

export default function Project() {
    const [emblaRef] = useEmblaCarousel(embla_OPTIONS)
    const [roadRef] = useEmblaCarousel(embla_OPTIONS)
    return (
        <>
            <div className="mt-10 flex flex-col col-span-12 md:col-span-6" id='roadmytrip'>
                <div className="embla" ref={roadRef}>
                    <div className="embla__container">
                        <div className="embla__slide">
                            <LazyLoad once height={50}>
                                <img src="./roadmytrip.webp" alt="image du site web 'RoadMyTrip', home page" />
                            </LazyLoad>
                        </div>
                        <div className="embla__slide">
                            <LazyLoad once height={50}>
                                <img src="./register.webp" alt="image of website 'RoadMyTrip', register page" />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-2 mt-3 md:mt-0 md:p-5 bg-neutral-100 shadow-xl">

                    <div className="flex justify-between items-start">
                        <h3>RoadMyTrip</h3>
                        <i className="text-sm">06/03/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 mt-5">
                        <p>C'est toujours marrant de voir par quoi nous avons commencer. Voici mon premier site internet !</p>
                        <p>Grâce à ce site, j'ai appris à manipuler des données provenant d'une API</p>
                        <p>J'ai aussi appris à stocker des données, et les récupérer pour les vérifiers</p>

                    </div>
                    <div className="flex justify-between self-start py-5">
                        <div className="flex flex-wrap gap-5">
                            <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">React.js</span>
                            <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">Redux</span>
                            <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">TailwindCSS</span>
                            <span className="inline-block bg-[#80e8b6] font-bold py-1 px-2 rounded-full">NodeJS</span>
                        </div>
                        <div className='px-2'>
                            <svg className="hover:scale-95 duration-200" width="30" height="30" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M9.591 22.736c-.096-.125-.096-1.237 0-3.337-1.035.036-1.69-.036-1.963-.215-.41-.27-.82-1.1-1.184-1.686-.363-.585-1.171-.678-1.497-.809-.326-.13-.408-.664.899-.26 1.306.403 1.37 1.502 1.782 1.759.412.256 1.398.144 1.844-.062.447-.206.414-.972.494-1.275.1-.284-.255-.347-.262-.349-.436 0-2.727-.498-3.356-2.716-.63-2.219.181-3.669.613-4.292.289-.416.263-1.301-.076-2.657C8.117 6.68 9.067 7.067 9.737 8c0 .006.877-.521 2.263-.521s1.877.429 2.257.521c.38.093.683-1.633 3.026-1.163-.489.962-.899 2.163-.586 2.657.313.494 1.54 2.064.786 4.292-.503 1.485-1.49 2.39-2.964 2.716-.169.054-.253.141-.253.261 0 .18.228.2.557 1.043.22.562.235 2.168.048 4.818-.476.12-.846.202-1.11.244a12.14 12.14 0 0 1-1.478.13c-.5.016-.673.015-1.365-.05a9.896 9.896 0 0 1-1.326-.212Z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col col-span-12 md:col-span-6" id='spacezone'>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">
                            <LazyLoad once height={50}>
                                <img
                                    className="min-w-full object-contain object-center"
                                    src="/authentification.webp"
                                    alt="product image"
                                />
                            </LazyLoad>
                        </div>
                        <div className="embla__slide">
                            <LazyLoad once height={50}>
                                <img
                                    className="min-w-full object-contain object-center"
                                    src="/homepage.webp"
                                    alt="product image"
                                />
                            </LazyLoad>
                        </div>
                        <div className="embla__slide">
                            <LazyLoad once height={50}>
                                <img
                                    className="min-w-full object-contain object-center"
                                    src="/profil2.webp"
                                    alt="product image"
                                />
                            </LazyLoad>
                        </div>
                        <div className="embla__slide">
                            <LazyLoad once height={50}>
                                <img
                                    className="min-w-full object-contain object-center"
                                    src="/cart.webp"
                                    alt="product image"
                                />
                            </LazyLoad>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 mt-3 md:mt-0 bg-neutral-100 md:p-5 shadow-xl">
                    <div className="flex justify-between items-start">
                        <h3>SpaceZone</h3>
                        <i className="text-sm">07/04/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 mt-5">
                        <p>Je vous présente SpaceZone, un projet d'e-commerce que j'ai dû effectuer pour mon école, il m'aura permis d'obtenir mon diplôme !</p>
                        <p>J'ai appris les fondamentaux de React, et j'ai aussi appris à utiliser Redux. C'était une vrai galère !</p>
                        <p>Système de panier, système de paiement avec stripe, CRUD au complet côté administrateur et utilisateur, carousel fait maison, filtre de recherche, menu intéractif, réusabilité des composants, création de modal. Et encore plein de choses dont je suis très fier d'avoir réalisé.</p>
                    </div>
                    <div className="flex justify-between self-start py-5">
                        <div className="flex flex-wrap gap-5">
                            <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">React.js</span>
                            <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">Redux</span>
                            <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">TailwindCSS</span>
                            <span className="inline-block bg-[#80e8b6] font-bold py-1 px-2 rounded-full">NodeJS</span>
                        </div>
                        <Link className='px-2' to="https://github.com/Azonesbz/SpaceZone" target="_blank">
                            <svg className="hover:scale-95 duration-200" width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M9.591 22.736c-.096-.125-.096-1.237 0-3.337-1.035.036-1.69-.036-1.963-.215-.41-.27-.82-1.1-1.184-1.686-.363-.585-1.171-.678-1.497-.809-.326-.13-.408-.664.899-.26 1.306.403 1.37 1.502 1.782 1.759.412.256 1.398.144 1.844-.062.447-.206.414-.972.494-1.275.1-.284-.255-.347-.262-.349-.436 0-2.727-.498-3.356-2.716-.63-2.219.181-3.669.613-4.292.289-.416.263-1.301-.076-2.657C8.117 6.68 9.067 7.067 9.737 8c0 .006.877-.521 2.263-.521s1.877.429 2.257.521c.38.093.683-1.633 3.026-1.163-.489.962-.899 2.163-.586 2.657.313.494 1.54 2.064.786 4.292-.503 1.485-1.49 2.39-2.964 2.716-.169.054-.253.141-.253.261 0 .18.228.2.557 1.043.22.562.235 2.168.048 4.818-.476.12-.846.202-1.11.244a12.14 12.14 0 0 1-1.478.13c-.5.016-.673.015-1.365-.05a9.896 9.896 0 0 1-1.326-.212Z" clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}