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
            <Actuality />
            <Career />
            <Portfolio />
            <Contact />
        </>
    )
}