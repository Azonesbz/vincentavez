import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";

export default function Cards() {
    return (
        <>
            <div className="mt-10 flex flex-col sm:flex-row bg-neutral-100 shadow-xl">
                <Carousel>
                    <img
                        className="min-w-full object-cover object-center"
                        src="/viva2.webp"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-cover object-center"
                        src="/viva1.webp"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-full p-5 mt-3">
                    
                    <div className="flex justify-between items-start">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff]">Viva Technology</h2>
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