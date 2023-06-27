import Cards from "./cards";


export default function Actuality(){
    return (
        <>
            <section className="container py-24" id="actuality">
                <h1 className="font-thin">Les actualités</h1>
                <div className="grid grid-cols-12">
                    <Cards />
                </div>
            </section>
        </>
    )
}