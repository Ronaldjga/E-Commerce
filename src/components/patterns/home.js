import react from "react";
import { GameSlide } from "../gameSlide";
import { NavBar } from "../navBar";

export function Home() {
    return (
        <section>
            <NavBar />
            <GameSlide/>
        </section>
    )
}