import { useEffect } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Portfolio from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import { BurgerMenuProvider } from "../components/header/BurgerMenu";

export default function Home() {
  return (
      <>
        <BurgerMenuProvider>
          <Header />
          {/* <Courses /> */}
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </BurgerMenuProvider>
      </>
  )
}