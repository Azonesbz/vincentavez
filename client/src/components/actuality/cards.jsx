import LazyLoad from "react-lazyload";
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from "react-router-dom";
import "./Actuality.css"

const embla_OPTIONS = {
    loop: true,
    align: 'center',
}

export default function Cards() {
    const [vivaRef] = useEmblaCarousel(embla_OPTIONS)
    return (
        <>
            <div className="mt-10 flex flex-col col-span-12 md:col-span-4">
                <div className="embla" ref={vivaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">
                            <LazyLoad className="min-h-full" once>
                                <img
                                    className="min-h-full h-72 object-cover object-center"
                                    src="/viva2.webp"
                                    alt="product image"
                                />
                            </LazyLoad>
                        </div>
                        <div className="embla__slide">
                            <LazyLoad className="min-h-full" once>
                                <img
                                    className="min-h-full h-72 object-cover object-center"
                                    src="/viva1.webp"
                                    alt="product image"
                                />
                            </LazyLoad>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-5 shadow-xl">

                    <div className="flex justify-between items-start">
                        <h2>Viva Technology</h2>
                        <i className="text-sm">17/06/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 mt-5">
                        <p>J'ai été invité à la Viva Tech ! </p>
                        <p>En effet, pôle emploi m'a invité pour que je puisse représenter la <Link className="text-indigo-800" to="https://3wa.fr">3WAcademy</Link>.</p>
                        <p>J'ai réaliser une interview et j'ai également présenter mon parcours ce qui m'a permis de renforcer ma confiance à l'oral, parce que c'était pas gagné !</p>
                        <p>Je vous invites grandement si l'occasion se présente à vous, de participer à un évènement de ce style.</p>
                    </div>

                </div>
            </div>
        </>
    )
}