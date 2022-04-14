import react from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { products } from "../../products";
import Image from "next/image";
import { AddToCar } from "../../src/components/addToCar";
import { useEffect } from "react";
import MyCart from "../myCart";

export default function GamePage({ gameProduct }) {
    const [amount, setAMount] = react.useState(0)

    const { isFallback } = useRouter();
    if (isFallback) {
        return <p>Carregando...</p>
    }


    return (
        <div className="p-5">
            <div className="flex flex-col justify-center items-center gap-3 shadow-lg p-5">
                <div className="w-full">
                    <Image
                        layout="responsive"
                        src={gameProduct.image}
                        alt={gameProduct.name}
                        priority
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <h2 className="text-xl text-center">{gameProduct.name}</h2>
                    <p className="p-3 bg-yellow-500 rounded-full">{gameProduct.score}</p>
                    <p className="font-bold text-2xl">R$ {gameProduct.price}</p>
                </div>
                <div className="flex justify-between">
                    <button onClick={(e) => {
                        e.preventDefault()
                        setAMount(parseFloat(amount) - 1)
                    }}>+</button>
                    <input
                        className="w-1/3 text-center"
                        type={'number'}
                        value={amount}
                        onChange={(e) => {
                            setAMount(e.target.value)
                        }}
                    />
                    <button onClick={(e) => {
                        e.preventDefault()
                        setAMount(parseFloat(amount) + 1)
                    }}>+</button>
                </div>
                <AddToCar
                    thisGame={gameProduct}
                    thisAmount={amount}
                />
            </div>
        </div>
    )
}


export const getStaticProps = async (context) => {
    const { game } = context.params
    const thisGame = products.find(e => e.name === game)

    return {
        props: {
           gameProduct: thisGame
        },
        revalidate: 10
    }
}

export const getStaticPaths = async () => {
    const paths = products.map((data) => {
        return {params: { game: data.name}}
    })

    return {
        paths,
        fallback: true,
    }
}