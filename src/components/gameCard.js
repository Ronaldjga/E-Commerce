import react from "react";
import Image from "next/image";
import { AddToCar, ButtonAmount, DeleteGame } from "./addToCar";


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
    const [amount, setAmount] = react.useState(quantidade)

    const subTotalCalc = (quantidade * game.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        <div className="flex flex-col gap-2 p-5 shadow-lg relative">
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
            <ButtonAmount
                amount={amount}
                setAmount={setAmount}
            />
            <p className="text-center">
               Subtotal: <span className="font-bold">{subTotalCalc}</span>
            </p>
            <AddToCar
                thisAmount={amount}
                thisGame={game}
            />
            <DeleteGame
                thisGame={game}
            />
        </div>
    )
}