import react from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { products } from "../../products";
import Image from "next/image";
import { AddToCar, ButtonAmount } from "../../src/components/addToCar";
import { useEffect } from "react";
import MyCart from "../myCart";
import { NavBar } from "../../src/components/navBar";

export default function GamePage({ gameProduct }) {
    const [amount, setAmount] = react.useState("1")
    const [quantidadeAtual, setQuantidadeAtual] = react.useState()
    const [db, setDb] = react.useState()
    const [subTotal, setSubTotal] = react.useState()
    const price = gameProduct.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    const { isFallback } = useRouter();
    if (isFallback) {
        return <p>Carregando...</p>
    }

    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
            setQuantidadeAtual('')
            setSubTotal(parseFloat(amount * gameProduct.price).toFixed(2))
        } else {
            const allProducts = JSON.parse(localStorage.getItem('myShoppingCart'))
            setDb(allProducts)
            allProducts.find(e => {
                if (e.game.name === gameProduct.name) {
                    setQuantidadeAtual(e.quantidade)
                    const total = e.quantidade * gameProduct.price
                    setSubTotal(total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
                }
                else { null }
            })
        }
    },[amount, db])

    return (
        <div>
            <NavBar/>
            <div className="p-5 max-w-screen-xl mx-auto">
                <div className="flex flex-col justify-center items-center gap-2 shadow-2xl p-5 rounded-[8px] bg-seaBlue-900 text-white
                sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:place-items-center
            
                ">
                    <div className="w-3/4 sm:w-full sm:col-start-1 sm:row-span-4 lg:p-10">
                        <Image
                            layout="responsive"
                            src={gameProduct.image}
                            alt={gameProduct.name}
                            priority
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 md:col-start-2 md:row-start-1 md:gap-5 bgred">
                        <h2 className="text-xl text-center lg:text-4xl lg:font-bold">{gameProduct.name}</h2>
                        <p className="p-3 bg-yellow-500 rounded-full">{gameProduct.score}</p>
                        <p className="font-bold text-2xl lg:text-5xl">{price}</p>
                    </div>
                    <div className="w-full flex flex-col gap-5 items-center">
                        <ButtonAmount
                            amount={amount}
                            setAmount={setAmount}
                        />
                        <AddToCar
                            thisGame={gameProduct}
                            thisAmount={amount}
                        />
                        {subTotal ? <p>
                            subTotal: <span className="font-bold">{subTotal}</span>
                        </p> : null}
                    </div>
                </div>
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