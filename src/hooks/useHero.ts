import {characters, defaultHero} from "../utils/constants.js";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.js";

export const useHero = () => {
    let{heroId = defaultHero}= useParams();
    const {changeHero} = useContext(SWContext);

    const realHeroId=characters[heroId]?heroId:defaultHero;

    useEffect(() => {
        changeHero(realHeroId);
    }, [realHeroId]);
    return realHeroId;
}