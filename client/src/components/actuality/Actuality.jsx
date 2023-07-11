import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import './Actuality.css'
import useEmblaCarousel from 'embla-carousel-react'



export default function Actuality(){
    const [emblaRef] = useEmblaCarousel()
    const [post, setPost] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_URL}`);
            const data = await response.json();
            return setPost(data.post)
          } catch (error) {
            // Gérer les erreurs
          }
        };
      
        fetchData();
      }, []);
      
    return (
        <>
            <section className="container py-24" id="actuality">
                <h2>Les actualités</h2>
                <div className="grid grid-cols-12 gap-5">
                    {post ? post.map((el, index) => {
                        const newEmblaIndex = index+'Ref'
                        
                        const date              = new Date(el.date).toLocaleDateString()
                        const pictures          = el.pictures.split('|||')

                        return (
                            <div className="mt-10 flex flex-col col-span-12 md:col-span-6">
                                <div key={index} className="embla" ref={emblaRef}>
                                    <div className="embla__container">
                                        {pictures && pictures.map((picture, index) => (
                                            <div key={index} className="embla__slide">
                                                <LazyLoad className="min-h-full" once width={250}>
                                                    <img
                                                        className="min-h-full object-cover object-center"
                                                        src={`./${picture}`}
                                                        alt="product image"
                                                    />
                                                </LazyLoad>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col p-5 shadow-xl">

                                    <div className="flex justify-between items-start">
                                        <h3>{el.title}</h3>
                                        <i className="text-sm">{date}</i>
                                    </div>
                                    <div className="flex flex-col space-y-2 mt-5">
                                        <p>{el.content}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    } 
                    ) : 'loading'}
                </div>
            </section>
        </>
    )
}