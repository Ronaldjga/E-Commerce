import react, {useState} from "react";
import { products } from "../../../products";
import { GameCard } from "../gameCard";
import { GameType } from "../gameType";
import Link from "next/link";

export function GameList(props) {
    const [seachGame, setSeachGame] = react.useState('')
    const [seachType, setSeachType] = react.useState('')


    return (
        <main>
            <div className="max-w-screen-xl mx-auto p-5 flex flex-col justify-center items-center gap-5">
                <div className="w-full p-2 bg-seaBlue-800 rounded-[8px]">
                    <input
                        className="w-full p-2 rounded-[8px]"
                        type={'text'}
                        placeholder="Pesquise um Game"
                        value={seachGame}
                        onChange={(e) => {
                            setSeachGame(e.target.value)
                        }}
                    />
                    <GameType
                        seachType={seachType}
                        setSeachType={setSeachType}
                    />
                </div>
                
                <div className="w-full grid place-items-start gap-5 min-h-screen
                sm:grid-cols-2
                lg:grid-cols-3
                ">
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
                            <Link key={key} href={`/games/${data.name}`}>
                                <a className="w-full flex justify-center">
                                    <GameCard
                                        key={key}
                                        game={data}
                                    />
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}