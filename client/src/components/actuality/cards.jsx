import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";

export default function Cards() {
    const VivaTech = []
    return (
        <>
            <div className="mt-10 flex">
                <Carousel>
                    <img
                        className="min-w-full object-cover object-center"
                        src="/viva2.jpg"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-cover object-center"
                        src="/viva1.jpg"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-full ml-5">
                    <div className="flex justify-between items-start ">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff] text-3xl h-10">Viva Technology</h2>
                        <i>17/06/2023</i>
                    </div>

                    <p>J'ai été invité à la Viva Tech ! </p>
                    <p>En effet, pôle emploi m'a invité pour que je puisse représenter la <Link className="text-indigo-800" to="https://3wa.fr">3WAcademy</Link>.</p>
                    <p>J'ai réaliser une interview et j'ai également présenter mon parcours ce qui m'a permis de renforcer ma confiance à l'oral, parce que c'était pas gagné !</p>
                </div>
            </div>
            <div className="mt-5 flex">
                <Carousel>
                    <img
                        className="min-w-full object-cover object-center"
                        src="/viva2.jpg"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-cover object-center"
                        src="/viva1.jpg"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-full ml-5">
                    <div className="flex justify-between items-start ">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff] text-3xl h-10">Remise des diplômes</h2>
                        <i>07/2023</i>
                    </div>

                    <p>vreve</p>
                </div>
            </div>
        </>
    )
}