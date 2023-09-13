import { useEffect } from "react";
import Courses from "../components/courses/Courses";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/Skills/Skills";

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
        }
      }, []);

      useEffect(() => {

        const observerRight = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('elementShow');
                } else {
                    entry.target.classList.remove('elementShow');
                }
            });
        });

          const hiddenElementsRight = document.querySelectorAll('.elementRight');

          hiddenElementsRight.forEach((el) => observerRight.observe(el));

        return () => {
            observerRight.disconnect();
        }
      }, [])

    useEffect(() => {
        const observerFooter = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('elementShowFooter')
                    entry.target.classList.remove('elementFooter');

                } else {
                    entry.target.classList.remove('elementShowFooter');
                    entry.target.classList.add('elementFooter');
                }
            });
        });

          const hiddenElementsRight = document.querySelectorAll('.elementFooter');

          hiddenElementsRight.forEach((el) => observerFooter.observe(el));

        return () => {
            observerFooter.disconnect();
        }
    }, [])
    return (
        <>
            <Header />
            {/* <Courses /> */}
            {/* <Skills /> */}
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}