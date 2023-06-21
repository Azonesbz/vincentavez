import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";

export default function Cards() {
    return (
        <>
            <div className="mt-10 flex ">
                <Carousel>
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripWhite.png"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripBlack.png"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-[40%] pl-5 bg-neutral-100 shadow">
                    <div className="absolute right-[15%] blur-sm flex -mb-px h-[1px] w-24">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    </div>
                    <div className="flex justify-between items-start p-2">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff]">RoadMyTrip</h2>
                        <i>06/03/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 w-3/4 mt-5">
                        <p>C'est toujours marrant de voir par quoi nous avons commencer. Voici mon premier site internet !</p>
                        <p>Grâce à ce site, j'ai appris à manipuler des données provenant d'une API</p>
                        
                    </div>
                    <div className="flex flex-wrap gap-5 py-5">
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">HTML</span>
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">CSS</span>
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">JavaScript</span>
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">EJS</span>
                        <span className="inline-block bg-[#80e8b6] font-bold py-1 px-2 rounded-full">NodeJS</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex">
                <Carousel>
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneWelcome.png"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneHeader.png"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneProduct.png"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneprofil.png"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-[40%] pl-5 bg-neutral-100 shadow">
                    <div className="flex justify-between items-start p-2">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff]">SpaceZone</h2>
                        <i>06/03/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 w-3/4 mt-5">
                        <p>Je vous présente SpaceZone, un projet de e-commerce 2.0 que j'ai dû effectuer pour mon école, il m'aura permis d'obtenir mon diplôme !</p>
                        <p>J'ai appris les fondamentaux de React, et j'ai aussi appris à utiliser Redux. C'était une vrai galère !</p>
                        <p>Système de panier, système de payement avec stripe, CRUD au complet côté administrateur et utilisateur, carousel fait maison, filtre de recherche, menu intéractif, réusabilité des composants, création de modal. Et encore plein de chose dont je suis très fier d'avoir réalisé.</p>
                    </div>
                    <div className="flex flex-wrap gap-5 py-5">
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">React.js</span>
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">Redux</span>
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">TailwindCSS</span>
                        <span className="inline-block bg-[#80e8b6] font-bold py-1 px-2 rounded-full">NodeJS</span>
                    </div>
                </div>
            </div>
        </>
    )
}