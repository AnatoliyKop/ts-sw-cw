import {starWarsInfo} from "../utils/constants.ts";
import {useHero} from "../hooks/useHero.ts";

const StarWars = () => {
    const mainHero= useHero()
    console.log(mainHero)

    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;