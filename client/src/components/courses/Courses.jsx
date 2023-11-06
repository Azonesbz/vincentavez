import { useRef, useState } from "react";
import Section from "../Section";

const Courses = () => {
    return (
      <>
        <div className="min-w-screen h-1 bg-gradient-to-b from-[#000249] to-transparent" />
        <Section className="px-2 lg:px-48 py-5" title={"Parcours"} id="courses">
          <div className="grid grid-cols-2 gap-5 p-2 rounded-3xl">
            <iframe className="object-contain col-span-2 sm:col-span-1  h-[25em] w-full rounded-3xl" src="https://www.youtube.com/embed/AOQXgih3Fjo" title="Rencontre avec Vincent, apprenant développeur full-stack à la 3W Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="bg-[#071952] rounded-3xl p-5 col-span-2 sm:col-span-1">
              <h3 className="underline font-bold underline-offset-4">Je suis étudiant à la 3W Academy</h3>
              <div className="space-y-2 mt-5">
                <p>
                  J'ai commencé par apprendre le développement web en
                  autodidacte, puis je me suis orienté vers un organisme de
                  formation qui à un processus d'apprentissage lié à la
                  pratique.
                </p>
                <p>
                  J'ai obtenu mon diplôme de développeur et concepteur
                  d'application web le 12 mai 2023, ce qui m'a permis de
                  continuer mes études dans ce domaine.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
}

export default Courses