import Navigation from "./Navigation.tsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";

const Header = () => {
    const {heroId = defaultHero} = useParams();
    const heroName = characters[heroId as keyof typeof characters].name || characters[defaultHero].name;
    console.log(heroName);

    return (
        <header className="rounded-top-4">
            <Navigation/>
            <h1 className="text-center fs-1 py-4">{heroName} +1</h1>
        </header>
    );
};

export default Header;