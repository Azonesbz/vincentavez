import Project from "./Projects";
import "./Portfolio.css"
import Cooperation from "./CooperationProject";



export default function Portfolio(){
    return (
        <>
            <section className="container py-24 " id="portfolio">
                <h1 className="font-light">Les projets que j'ai réalisé</h1>
                <div className="grid grid-cols-12 gap-5">
                    <Project />
                </div>
                <h1 className="text-center mt-10">En collaboration</h1>
                <div className="grid grid-cols-12 gap-5">
                    <Cooperation />
                </div>
            </section>
        </>
    )
}