import Actuality from "../components/actuality/Actuality";
import Career from "../components/career/Career";
import Header from "../components/header/header";
import Portfolio from "../components/portfolio/portfolio";

export default function Home(){
    return (
        <>
            <Header />
            <Actuality />
            <Career />
            <Portfolio />
        </>
    )
}