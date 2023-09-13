import Project from "./Project";
import "./Portfolio.css"

export default function Portfolio(){

    const SpaceZone = {
        images: ["cart.webp", "product.webp", "authentification.webp", "profil2.webp", "backoffice.webp"],
        stacks: ['NodeJS', "React","Redux", "TailwindCSS", "SQL"]
    }
    const Uncore = {
        images: ["uncore.webp"],
        stacks: ['PHP', "React","Redux", "SCSS", "SQL"]
    }
    const Whispee = {
        images: ["chat.webp", "accueil.webp"],
        stacks: ['Python', "React", "Websocket", "TailwindCSS", "NoSQL"]
    }

    return (
        <>
            <section className="container py-24 " id="projects">
                <h2 className="text-center text-5xl font-bold">Projects</h2>
                <div className="grid grid-cols-12 gap-5 mt-10">
                    <Project project={Uncore} name={"Uncore"} subName={"Bientôt disponible à tous"} date={"06/03/2023"}>
                        <div className="flex flex-col space-y-2 mt-5">
                            <p>Un très gros projet arrive et sera disponible début 2024.</p>
                            <p>Vous pouvez suivrent ces avancements sur nos réseaux sociaux ou bien sur notre discord communautaire.</p>
                            <p>Vous pouvez également postuler sur cette adresse mail si vous recherchez une alternance</p>
                        </div>
                    </Project>
                    <Project project={SpaceZone} name={"SpaceZone"} subName={"Site e-commerce"} date={"11/05/2023"} github={"https://github.com/Azonesbz/SpaceZone"}>
                        <div className="flex flex-col space-y-2 mt-5">
                            <p>Je vous présente SpaceZone, un projet d'e-commerce que j'ai dû effectuer pour mon école, il m'aura permis d'obtenir mon diplôme !</p>
                            <p>J'ai appris les fondamentaux de React, et j'ai aussi appris à utiliser Redux. C'était une vrai galère !</p>
                            <p>Système de panier, système de paiement avec stripe, CRUD au complet côté administrateur et utilisateur, carousel fait maison, filtre de recherche, menu intéractif, réusabilité des composants, création de modal. Et encore plein de choses dont je suis très fier d'avoir réalisé.</p>
                        </div>
                    </Project>
                </div>
                <h2 className="text-center text-5xl font-bold mt-20">Collaborative projects</h2>
                <div className="grid grid-cols-12 gap-5 mt-10">
                    <Project project={Whispee} name={"Whispee"} subName={"Application de messagerie instantanée"} date={"11/05/2023"}>
                        <div className="flex flex-col space-y-2 mt-5">
                            <p>Ceci est un projet sur lequel j'ai travaillé pendant un mois lors de mon stage. Il appartient à <span className='text-cyan-500'>Sycatle.dev</span>.</p>
                            <p>Nous avons travaillé en collaboration avec <span className='text-cyan-500'>Ali Missoum</span>, un collègue de formation, ainsi qu'avec <span className='text-cyan-500'>Charlie Dallier-Wood</span>, CEO de sycatle.dev.</p>
                        </div>
                    </Project>
                </div>
            </section>
        </>
    )
}