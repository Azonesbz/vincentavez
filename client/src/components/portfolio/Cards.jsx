import Carousel from "../carousel/Carousel";

export default function Cards() {
    return (
        <>
            <div className="mt-10 flex flex-col sm:flex-row">
                <Carousel>
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripWhite.webp"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripBlack.webp"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-full p-2 mt-3 sm:mt-0 sm:pt-0">

                    <div className="flex justify-between items-start">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff]">RoadMyTrip</h2>
                        <i className="text-sm">06/03/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 mt-5">
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
            <div className="mt-10 flex flex-col sm:flex-row">
                <Carousel>
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneWelcome.webp"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneHeader.webp"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneProduct.webp"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneprofil.webp"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-contain object-center"
                        src="/spacezoneFilter.webp"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-full p-2 mt-3 sm:mt-0 sm:pt-0">
                    <div className="flex justify-between items-start">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff]">SpaceZone</h2>
                        <i className="text-sm">06/03/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 mt-5">
                        <p>Je vous présente SpaceZone, un projet d'e-commerce 2.0 que j'ai dû effectuer pour mon école, il m'aura permis d'obtenir mon diplôme !</p>
                        <p>J'ai appris les fondamentaux de React, et j'ai aussi appris à utiliser Redux. C'était une vrai galère !</p>
                        <p>Système de panier, système de paiement avec stripe, CRUD au complet côté administrateur et utilisateur, carousel fait maison, filtre de recherche, menu intéractif, réusabilité des composants, création de modal. Et encore plein de choses dont je suis très fier d'avoir réalisé.</p>
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