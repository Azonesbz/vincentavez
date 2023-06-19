import { Link } from "react-router-dom"

export default function Career(){
    return (
        <>
            <section className="container min-h-screen mt-10" id="Actualité">
                <h1 className="font-light">Le parcours de Vincent</h1>
                <div className="bg-stone-200 w-2/3 mt-10 p-5 rounded">
                    <h2>Je m'appelle Vincent, et j'ai 19 ans.</h2>
                    <div className="flex flex-col space-y-5">
                        <p className="mt-5">Je suis passionné par tout ce qui s'apprend ! Le métier de développeur est fascinant, à partir de rien, vous pouvez construire un véritable empire du web, et c'est exactement pour cela que nous en sommes ici aujourd'hui avec <Link className="text-indigo-800" to="https://sycatle.dev">Sycatle.dev</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}