import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";

export default function Cards() {
    return (
        <>
            <div className="mt-10 flex ">
                <Carousel>
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripWhite.png"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripBlack.png"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-full pl-5 bg-neutral-100 shadow">
                    <div className="absolute right-72 flex -mb-px h-[2px] w-56">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    </div>
                    <div className="flex justify-between items-start p-2">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff]">RoadMyTrip</h2>
                        <i>06/03/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 w-3/4 mt-5">
                        <p>C'est toujours marrant de voir par quoi nous avons commencer. Voici mon premier site internet !</p>
                        <p>Grâce à ce site, j'ai appris à manipuler des données provenant d'une API</p>
                        
                    </div>
                    <div className="flex space-x-5 py-5">
                        <span className="inline-block bg-[#95bbe6] font-bold py-1 px-2 rounded-full">React.js</span>
                        <span className="inline-block bg-[#80e8b6] font-bold py-1 px-2 rounded-full">NodeJS</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex bg-neutral-100 shadow">
                <Carousel>
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripWhite.png"
                        alt="product image"
                    />
                    <img
                        className="min-w-full object-cover object-center"
                        src="/roadmytripBlack.png"
                        alt="product image"
                    />
                </Carousel>
                <div className="flex flex-col w-full ml-5">
                    <div className="absolute right-72 flex -mb-px h-[2px] w-56">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    </div>
                    <div className="flex justify-between items-start p-2">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00aa] to-[#0000ff]">SpaceZone</h2>
                        <i>06/03/2023</i>
                    </div>
                    <div className="flex flex-col space-y-2 w-3/4 mt-5">
                        <p>C'est toujours marrant de voir par quoi nous avons commencer. Voici mon premier site internet !</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}