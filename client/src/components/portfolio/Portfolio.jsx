import Cards from "./cards";

export default function Portfolio(){
    return (
        <>
            <section className="container py-24" id="portfolio">
                <h1 className="font-light">Les projets que j'ai réalisé</h1>
                <Cards />
            </section>
        </>
    )
}