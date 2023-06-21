import { Link } from "react-router-dom"

export default function Career(){
    return (
        <>
            <section className="container min-h-screen mt-10 flex-grow w-full relative z-1" id="parcours">
                <h1 className="font-light relative z-0">Le parcours de Vincent</h1>
                <img className='absolute inset-0 z-1 blur-xl' src="/blurblue.png" alt="blur image" />
                <img className='absolute top-72 right-96 z-1 rotate-180 blur-2xl' src="/blurblue.png" alt="blur image" />
                <div className="bg-stone-200 w-2/3 mt-10 p-5 rounded-r-xl shadow mr-auto relative z-2">
                    <h2>Je m'appelle Vincent, et j'ai 19 ans.</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Je suis passionné par tout ce qui s'apprend ! Le métier de développeur est fascinant, à partir de rien, vous pouvez construire le projet de vos rêves, et c'est exactement pour cela que nous en sommes ici aujourd'hui avec <Link className="text-indigo-800" to="https://sycatle.dev">Sycatle.dev</Link></p>
                        <p className="mt-5"></p>
                    </div>
                </div>
                <div className="bg-stone-200 w-2/3 mt-10 p-5 rounded-l-xl shadow ml-auto relative z-2">
                    <h2>D'où je viens ?</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Né à Saint-Mandé, dans le 94 à Paris, je suis quelqu'un de très logique, et créatif. Depuis tout petit j'aime trouver la solution aux problèmes que je rencontre, et j'aime dessiner et construire des choses !</p>
                        <p className="mt-5"></p>
                    </div>
                </div>
                <div className="bg-stone-200 w-2/3 mt-10 p-5 rounded-r-xl shadow mr-auto relative z-2">
                    <h2>Maintenant</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Je suis à la recherche de "The entreprise !" pour septembre prochain. J'ai pour ambition d'apprendre les langages <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">TypeScript</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">NextJS</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">Prisma</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">GraphQL</Link>. </p>
                        <p className="mt-5">Avant toutes chose, j'ai besoin d'un projet stimulant, intéressant, et pour lequel je partage des valeurs similaires.</p>
                        <p className="mt-5">Je suis ouvert à toute proposition, veuillez me contacter sur mon adresse mail. <Link to="#contact" className="text-indigo-800">Ici</Link></p>
                    </div>
                </div>
                <div className="bg-stone-200 w-2/3 mt-10 p-5 rounded-l-xl shadow ml-auto relative z-2">
                    <h2>Compétences</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Je suis à la recherche de "The entreprise !" pour septembre prochain. J'ai pour ambition d'apprendre les langages <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">TypeScript</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">NextJS</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">Prisma</Link>,  <Link className="text-indigo-800" to="https://www.typescriptlang.org/" target="_blank">GraphQL</Link>. </p>
                        <p className="mt-5">Avant toutes chose, j'ai besoin d'un projet stimulant, intéressant, et pour lequel je partage des valeurs identiques.</p>
                        <p className="mt-5">Je suis ouvert à toute proposition, veuillez me contacter sur mon adresse mail.</p>
                    </div>
                </div>
            </section>
        </>
    )
}