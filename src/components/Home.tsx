import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {useHero} from "../hooks/useHero.ts";

const Home = () => {

    // let {heroId = defaultHero} = useParams();
    // const {changeHero} = useContext(SWContext);
    //
    // useEffect(() => {
    //     if (!characters[heroId]) {
    //         heroId = defaultHero;
    //     }
    //     changeHero(heroId);
    // }, [heroId]);
    const mainHero= useHero()
    console.log(mainHero)


    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;