import react, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { products } from '../../products'


export function GameSlide() {
    const [game, setGame] = react.useState(0)

    var timeAutoSlide = []

    react.useEffect(() => {
        autoSlide()
    },[game])

    const autoSlide = () => {
        if (game === 8) {
            timeAutoSlide.push(setTimeout(() => {
                setGame(0)
            },5000))
        } else {
            timeAutoSlide.push(setTimeout(() => {
                setGame(game + 1)
            },5000))
        }
        
    }


    return (
        <div className="max-w-screen-xl p-5 mx-auto flex flex-col justify-center items-center">
            <div className="">
                <Image
                    src={products[game].image}
                    alt={products[game].name}
                />
                <div className="flex flex-col justify-center items-center gap-3">
                    <h2 className="text-xl">{products[game].name}</h2>
                    <p className="p-3 bg-yellow-500 rounded-full">{products[game].score}</p>
                    <p className="font-bold text-2xl">R$ {products[game].price}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={0}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={1}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={2}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={3}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={4}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={5}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={6}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={7}
                    autoSlide = {timeAutoSlide}
                />
                <InputSlide
                    game={game}
                    setGame={setGame}
                    gameIndex={8}
                    autoSlide = {timeAutoSlide}
                />
            </div>
        </div>
    )
}

function InputSlide(props) {
    const checked = props.game === props.gameIndex ? 'bg-seaBlue-300' : 'bg-seaBlue-default'
    return (
        <>
            <label
                className={`${checked} block w-[25px] h-[10px]`}
                htmlFor={props.gameIndex}>
                
                </label>
            <input
                id={props.gameIndex}
                className="w-[50px] hidden"
                name="games"
                checked={props.game === props.gameIndex}
                onChange={(e) => {
                    props.setGame(props.gameIndex)
                    props.autoSlide.forEach(element => {
                        clearInterval(element)
                    });
                }}
                
                type={'radio'}
            />
        </>
    )
}