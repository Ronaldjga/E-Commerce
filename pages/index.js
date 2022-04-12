import react from "react";
import { GameList } from "../src/components/patterns/gamesList";
import { Home } from "../src/components/patterns/home";

export default function HomePage() {
    return (
        <div>
            <Home />
            <GameList/>
        </div>
    )
}