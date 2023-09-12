import useEmblaCarousel from 'embla-carousel-react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'

const embla_OPTIONS = {
    loop: true,
    align: 'center',
}

const Project = ({project, name, date, github, subName, children}) => {
    const [emblaRef] = useEmblaCarousel(embla_OPTIONS)
    return (
        <div className="mt-10 flex flex-col col-span-12 md:col-span-6 rounded-3xl" id='roadmytrip'>
                <div className="embla rounded-t-3xl" ref={emblaRef}>
                    <div className="embla__container">
                        {project.images.map((image, index) => (
                            <div className="embla__slide" key={index}>
                                <LazyLoad once>
                                    <img src={image} alt={image} />
                                </LazyLoad>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col p-2 mt-3 md:mt-0 md:p-5 text-white rounded-b-3xl bg-[#000249]">

                    <div className="flex justify-between items-start">
                        <div className='flex gap-5 items-end'>
                            <h3>{name} | <span>{subName}</span></h3>
                        </div>
                        <i className="text-sm">{date}</i>
                    </div>
                    {children}
                    <div className="flex justify-between self-start py-5 w-full">
                        <div className="flex flex-wrap gap-5">
                            {project.stacks.map((stack, index) => (
                                <span key={index} className="inline-block border text-sm font-bold py-1 px-2 rounded-full">{stack}</span>
                            ))}
                        </div>
                        {github ? <Link to={github} className='px-2'>
                            <svg className="hover:scale-95 duration-200" width="30" height="30" fill={"white"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M9.591 22.736c-.096-.125-.096-1.237 0-3.337-1.035.036-1.69-.036-1.963-.215-.41-.27-.82-1.1-1.184-1.686-.363-.585-1.171-.678-1.497-.809-.326-.13-.408-.664.899-.26 1.306.403 1.37 1.502 1.782 1.759.412.256 1.398.144 1.844-.062.447-.206.414-.972.494-1.275.1-.284-.255-.347-.262-.349-.436 0-2.727-.498-3.356-2.716-.63-2.219.181-3.669.613-4.292.289-.416.263-1.301-.076-2.657C8.117 6.68 9.067 7.067 9.737 8c0 .006.877-.521 2.263-.521s1.877.429 2.257.521c.38.093.683-1.633 3.026-1.163-.489.962-.899 2.163-.586 2.657.313.494 1.54 2.064.786 4.292-.503 1.485-1.49 2.39-2.964 2.716-.169.054-.253.141-.253.261 0 .18.228.2.557 1.043.22.562.235 2.168.048 4.818-.476.12-.846.202-1.11.244a12.14 12.14 0 0 1-1.478.13c-.5.016-.673.015-1.365-.05a9.896 9.896 0 0 1-1.326-.212Z" clip-rule="evenodd"></path>
                            </svg>
                        </Link> : 
                        <svg className="hover:scale-95 duration-200 cursor-not-allowed opacity-75" width="30" height="30" fill={"red"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" clip-rule="evenodd"></path>
                            <path fill-rule="evenodd" d="M9.591 22.736c-.096-.125-.096-1.237 0-3.337-1.035.036-1.69-.036-1.963-.215-.41-.27-.82-1.1-1.184-1.686-.363-.585-1.171-.678-1.497-.809-.326-.13-.408-.664.899-.26 1.306.403 1.37 1.502 1.782 1.759.412.256 1.398.144 1.844-.062.447-.206.414-.972.494-1.275.1-.284-.255-.347-.262-.349-.436 0-2.727-.498-3.356-2.716-.63-2.219.181-3.669.613-4.292.289-.416.263-1.301-.076-2.657C8.117 6.68 9.067 7.067 9.737 8c0 .006.877-.521 2.263-.521s1.877.429 2.257.521c.38.093.683-1.633 3.026-1.163-.489.962-.899 2.163-.586 2.657.313.494 1.54 2.064.786 4.292-.503 1.485-1.49 2.39-2.964 2.716-.169.054-.253.141-.253.261 0 .18.228.2.557 1.043.22.562.235 2.168.048 4.818-.476.12-.846.202-1.11.244a12.14 12.14 0 0 1-1.478.13c-.5.016-.673.015-1.365-.05a9.896 9.896 0 0 1-1.326-.212Z" clip-rule="evenodd"></path>
                        </svg>}
                    </div>
                </div>
            </div>
    )
}

export default Project