import react from "react";
import Image from "next/image";
import { AddToCar, ButtonAmount, DeleteGame } from "./addToCar";


export function GameCard(props) {
    const price = props.game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        <div className="w-full max-w-[350px] sm:max-w-full h-full flex flex-col gap-3 items-center bg-seaBlue-900 text-white shadow-lg shadow-black p-5 rounded-[8px]
            md:w-full
        ">
            <div className="max-w-[300px] w-2/3 md:w-3/4 relative">
                <Image
                    layout="responsive"
                    src={props.game.image}
                    alt={props.name}
                />
            </div>
            <p className="flex flex-col gap-3 items-center">
                <span className="text-center">
                    {props.game.name}
                </span>
                <span className="p-2 bg-yellow-500 rounded-full">
                    {props.game.score}
                </span>
            </p>
            <p className="text-2xl font-bold">
                {price}
            </p>
        </div>
    )
}

export function GameCardInCart({ game, quantidade }) {
    const [amount, setAmount] = react.useState(quantidade)

    const subTotalCalc = (quantidade * game.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    const price = game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        <div className="
        flex flex-col justify-between gap-4 p-5 shadow-sm shadow-black relative bg-seaBlue-900 text-white rounded-[8px]
        sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:place-items-center w-full
        
        
        ">
            <div className="w-full flex flex-col items-center gap-2
                sm:flex-row
                sm:w-full sm:row-span-3 sm:col-span-1
            ">
                <div className="min-w-[110px] w-2/4 sm:w-2/4 md:w-2/6 lg:w-1/6">
                    <Image
                        layout="responsive"
                        src={game.image}
                        alt={game.name}
                        priority
                    />
                </div>
                <div className="w-3/4 flex flex-col gap-2 justify-between items-center sm:items-start">
                    <h2 className="text-center sm:text-left w-full">
                        {game.name}
                    </h2>
                    <p className="w-full flex justify-between sm:justify-start sm:gap-5 items-center">
                        <span>{game.type}</span>
                        <span className="p-2 bg-yellow-500 rounded-full">{game.score}</span>
                    </p>
                    <p className="text-2xl font-bold">
                        {price}
                    </p>
                </div>
            </div>
            <p className="text-center">
               Subtotal: <span className="font-bold">{subTotalCalc}</span>
            </p>
            <ButtonAmount
                amount={amount}
                setAmount={setAmount}
            />
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