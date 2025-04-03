import {characters, navItems} from "../utils/constants.ts";
import {NavLink} from "react-router";

interface Props {
    friendStr: string,
    pos: number
}

const Friend = ({friendStr, pos}: Props) => {
    let styles = "w-100 ";

    if (pos === 7) {
        styles += " bottomLeft";
    }

    if (pos === 9) {
        styles += " bottomRight";
    }

    return (
        <NavLink className={"col-sm-4 p-1 "} to={`/${navItems[0].path}/${friendStr}`}>
        <img className={styles}  src={characters[friendStr].img} alt="Friend"/>
        </NavLink>
    );
};

export default Friend;