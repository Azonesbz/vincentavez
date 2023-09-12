import Project from "./Project";
import "./Portfolio.css"
import Cooperation from "./CooperationProject";



export default function Portfolio(){

    const RoadMyTrip = {
        images: ["roadmytrip.webp", "register.webp"],
        stacks: ['NodeJS', "EJS", "TailwindCSS", "SQL"]
    }
    const SpaceZone = {
        images: ["homepage.webp", "cart.webp", "product.webp", "authentification.webp", "profil2.webp", "backoffice.webp"],
        stacks: ['NodeJS', "React","Redux", "TailwindCSS", "SQL"]
    }
    const Whispee = {
        images: ["chat.webp", "accueil.webp"],
        stacks: ['Python', "React", "Websocket", "TailwindCSS", "NoSQL"]
    }

    return (
        <>
            <section className="container py-24 " id="portfolio">
                <h2>Les projets que j'ai réalisé</h2>
                <div className="grid grid-cols-12 gap-5">
                    <Project project={RoadMyTrip} name={"RoadMyTrip"} date={"06/03/2023"}>
                        <div className="flex flex-col space-y-2 mt-5">
                            <p>C'est toujours marrant de voir par quoi nous avons commencer. Voici mon premier site internet, réaliser en 1 semaine.</p>
                            <p>Grâce à ce site, j'ai appris à manipuler des données provenant d'une API.</p>
                            <p>J'ai aussi appris à stocker des données, et les récupérer pour les vérifiers</p>
                        </div>
                    </Project>
                    <Project project={SpaceZone} name={"SpaceZone"} date={"11/05/2023"} github={"https://github.com/Azonesbz/SpaceZone"}>
                        <div className="flex flex-col space-y-2 mt-5">
                            <p>Je vous présente SpaceZone, un projet d'e-commerce que j'ai dû effectuer pour mon école, il m'aura permis d'obtenir mon diplôme !</p>
                            <p>J'ai appris les fondamentaux de React, et j'ai aussi appris à utiliser Redux. C'était une vrai galère !</p>
                            <p>Système de panier, système de paiement avec stripe, CRUD au complet côté administrateur et utilisateur, carousel fait maison, filtre de recherche, menu intéractif, réusabilité des composants, création de modal. Et encore plein de choses dont je suis très fier d'avoir réalisé.</p>
                        </div>
                    </Project>
                </div>
                <h2 className="text-center mt-10">En collaboration</h2>
                <div className="grid grid-cols-12 gap-5">
                    <Project project={Whispee} name={"Whispee"} date={"11/05/2023"}>
                        <div className="flex flex-col space-y-2 mt-5">
                            <p>Ceci est un projet sur lequel j'ai travaillé pendant un mois lors de mon stage. Il appartient à <span className='text-cyan-500'>Sycatle.dev</span>.</p>
                            <p>Nous avons travaillé en collaboration avec <span className='text-cyan-500'>Ali Missoum</span>, un collègue de formation, ainsi qu'avec Charlie, <span className='text-cyan-500'>fondateur de Whispee</span>.</p>
                        </div>
                    </Project>
                </div>
            </section>
        </>
    )
}