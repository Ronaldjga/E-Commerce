import react from "react";
import Image from "next/image";


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