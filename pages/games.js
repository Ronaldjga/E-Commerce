import react from "react";
import { GameSlide } from "../src/components/gameSlide";
import { NavBar } from "../src/components/navBar";
import { GameList } from "../src/components/patterns/gamesList";


export default function Games() {
    return (
        <div>
            <NavBar/>
            <GameList/>
        </div>
    )
}