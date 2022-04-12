import react, {useState} from "react";
import { products } from "../../../products";
import { GameCard } from "../gameCard";

export function GameList() {
    const [seachGame, setSeachGame] = react.useState('')


    return (
        <main>
            <div className="max-w-screen-xl mx-auto p-5">
                <form>
                    <input
                        className="w-full h-[30px] p-2"
                        type={'text'}
                        placeholder="Pesquise um Game"
                        value={seachGame}
                        onChange={(e) => {
                            setSeachGame(e.target.value)
                        }}
                    />
                </form>
                <div className="grid place-items-center gap-5">
                    {products.filter((val) => {
                        if (seachGame === '') {
                            return val
                        } else if (val.name.toLowerCase().includes(seachGame.toLowerCase())) {
                            return val
                        }
                    }).map((data, key) => {
                        return (
                            <GameCard
                                key={key}
                                game={data}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}