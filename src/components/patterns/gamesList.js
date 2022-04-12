import react, {useState} from "react";
import { products } from "../../../products";
import { GameCard } from "../gameCard";
import { GameType } from "../gameType";

export function GameList() {
    const [seachGame, setSeachGame] = react.useState('')
    const [seachType, setSeachType] = react.useState('')


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
                <GameType
                    seachType={seachType}
                    setSeachType={setSeachType}
                />
                
                <div className="grid place-items-center gap-5">
                    {products.filter((val) => {
                        if (seachGame === '') {
                            return val
                        } else if (val.name.toLowerCase().includes(seachGame.toLowerCase())) {
                            return val
                        }
                    }).filter((val) => {
                        if (seachType === '') {
                            return val
                        } else if (val.type.toLowerCase().includes(seachType.toLowerCase())) {
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