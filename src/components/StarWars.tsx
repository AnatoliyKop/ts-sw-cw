import {starWarsInfo} from "../utils/constants.ts";
import {useHero} from "../hooks/useHero.ts";

const StarWars = () => {

    // let {heroId = defaultHero} = useParams();
    // const {changeHero} = useContext(SWContext);
    //
    // useEffect(() => {
    //     if (!characters[heroId]) {
    //         heroId = defaultHero;
    //     }
    //     changeHero(heroId);
    // }, []);
    const mainHero= useHero()
    console.log(mainHero)

    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;