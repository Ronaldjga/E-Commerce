import react from "react";
import Image from "next/image";
import { AddToCar } from "./addToCar";


export function GameCard(props) {
    return (
        <div className="w-4/5 flex flex-col items-center gap-2 bg-white shadow-md p-5">
            <div className="w-full relative">
                <Image
                    layout="responsive"
                    src={props.game.image}
                    alt={props.name}
                />
            </div>
            <p className="flex flex-col items-center">
                <span className="text-center">
                    {props.game.name}
                </span>
                <span className="p-2 bg-yellow-500 rounded-full">
                    {props.game.score}
                </span>
            </p>
            <p className="text-2xl font-bold">
                R$ {props.game.price}
            </p>
        </div>
    )
}

export function GameCardInCart({ game, quantidade }) {
    const [newAmount, setNewAmount] = react.useState(quantidade)

    return (
        <div className="flex flex-col p-5 shadow-lg">
            <div className="w-full flex">
                <div className="w-1/3">
                    <Image
                        layout="responsive"
                        src={game.image}
                        alt={game.name}
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <h2>
                        {game.name}
                    </h2>
                    <p className="flex justify-between items-center">
                        <span>{game.type}</span>
                        <span className="p-2 bg-yellow-500 rounded-full">{game.score}</span>
                    </p>
                    <p className="text-2xl font-bold">
                        R$ {game.price}
                    </p>
                </div>
            </div>
            <div className="flex justify-between">
                    <button onClick={(e) => {
                        e.preventDefault()
                        setNewAmount(parseFloat(newAmount) - 1)
                    }}>-</button>
                    <input
                        className="w-1/3 text-center"
                        type={'number'}
                        value={newAmount}
                        onChange={(e) => {
                            setNewAmount(e.target.value)
                        }}
                    />
                    <button onClick={(e) => {
                        e.preventDefault()
                        setNewAmount(parseFloat(newAmount) + 1)
                    }}>+</button>
                </div>
            <p className="text-center">
               R$ {parseFloat(quantidade * game.price).toFixed(2)}
            </p>
            <AddToCar
                thisAmount={newAmount}
                thisGame={game}
            />
        </div>
    )
}