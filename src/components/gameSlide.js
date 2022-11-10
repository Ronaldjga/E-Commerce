import react, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { products } from '../../products'
import Link from "next/link";
import rollLoading from './img/rollLoading.svg'


export function GameSlide() {
    const [game, setGame] = react.useState(0)
    const price = products[game].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

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
        <div className="w-full p-5 lg:py-10 mx-auto flex flex-col gap-5 justify-center items-center bg-primaryBlue-900 text-white">
            <Link href={`/games/${products[game].name}`}>
                <a className="w-full">
                    <div className="mx-auto w-3/4 md:grid md:grid-cols-2 md:place-items-center">
                        <div className="max-w-[300px] w-3/4 md:w-full mx-auto md:max-w-xl">
                            <Image
                                className="hover:brightness-125"
                                layout="responsive"
                                src={products[game].image}
                                alt={products[game].name}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 lg:gap-5">
                            <h2 className="text-xl text-center md:text-3xl lg:text-4xl md:font-bold">{products[game].name}</h2>
                            <p className="p-3 bg-black rounded-[8px]">{products[game].type}</p>
                            <p className="p-3 bg-yellow-500 rounded-[8px]">{products[game].score}</p>
                            <p className="font-bold text-2xl md:text-4xl lg:text-5xl">{price}</p>
                        </div>
                    </div>
                </a>
            </Link>
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
    const checked = props.game === props.gameIndex ? 'bg-primaryYellow-default' : 'bg-white opacity-20'
    return (
        <>
            <label
                className={`${checked} block w-[30px] h-[10px] hover:brightness-150 cursor-pointer`}
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