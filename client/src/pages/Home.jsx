import Actuality from "../components/actuality/Actuality";
import Career from "../components/career/Career";
import Contact from "../components/contact/Contact";
import Header from "../components/header/header";
import Portfolio from "../components/portfolio/Portfolio";
import LazyLoad from 'react-lazyload';

export default function Home() {
    return (
        <>
            <Header />

            <LazyLoad height={200}>
                <Actuality />
            </LazyLoad>

            <LazyLoad height={200}>
                <Career />
            </LazyLoad>

            <LazyLoad height={200}>
                <Portfolio />
            </LazyLoad>
            <LazyLoad height={200}>
                <Contact />
            </LazyLoad>


        </>
    )
}