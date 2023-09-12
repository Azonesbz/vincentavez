import { useRef, useState } from "react";
import Timeline from "../Timeline/Timeline";
import TimelineProps from "../Timeline/TimelineProps";

export default function Career() {
    const [date, setDate] = useState(new Date())
    const TimelineRef = useRef(null)
    return (
        <>
            <div className="min-w-screen h-1 bg-gradient-to-b from-[#000249] to-transparent" />
            <section className="px-48 min-h-full mt-10 flex-grow w-full relative z-1 py-24 " id="courses">
                <h2 className="text-center z-0 font-bold text-5xl">Courses</h2>
                <Timeline className="mt-16" ref={TimelineRef}>
                    <TimelineProps date={2021} title={"Fac d'anglais à l'université du Mans"}>
                        <p>J'ai obtenu mon baccalauréat, il est temps pour moi de continuer mes études. J'ai décidé de m'orienté vers une fac d'anglais, mais j'ai vite arrêter pour me consacrer à une activité que j'aime réellement.</p>
                    </TimelineProps>
                    <TimelineProps date={2023} title={"J'ai obtenu mon titre RNCP de niveau 5"}>
                        <p>J'ai contacter la 3WAcademy pour intégrer leurs formation de développeur et concepteur d'application web, j'ai immédiatement accroché du fait que c'est 90% de pratique ! C'est totalement ce qu'il me fallait.</p>
                    </TimelineProps>
                    <TimelineProps date={2023} title={"Actuellement en recherche d'alternance"}>
                        <p>Nous sommes donc le {date.getDate()}/{(date.getUTCMonth() + 1) < 10 ? "0" + (date.getUTCMonth() + 1) : (date.getUTCMonth() + 1) } et je suis à la recherche de "The entreprise". </p>
                    </TimelineProps>
                </Timeline>
            </section>
        </>
    )
}