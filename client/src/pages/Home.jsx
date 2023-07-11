import { useEffect } from "react";
import Actuality from "../components/actuality/Actuality";
import Career from "../components/career/Career";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";

export default function Home() {

    useEffect(() => {
        const observerLeft = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('elementShow');
            } else {
              entry.target.classList.remove('elementShow');
            }
          });
        });
        const observerRight = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('elementShow');
              } else {
                entry.target.classList.remove('elementShow');
              }
            });
          });
    
        const hiddenElementsLeft = document.querySelectorAll('.elementLeft');
        const hiddenElementsRight = document.querySelectorAll('.elementRight');
    
        hiddenElementsLeft.forEach((el) => observerLeft.observe(el));
        hiddenElementsRight.forEach((el) => observerRight.observe(el));
    
        return () => {
            observerLeft.disconnect();
            observerRight.disconnect();
        }
      }, []);

    
    return (
        <>
            <Header />
            <Actuality />
            <Career />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}