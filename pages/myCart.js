import react, { useState } from "react";
import { useEffect } from "react";
import { AddToCar } from "../src/components/addToCar";
import Image from "next/image";
import { GameCardInCart } from "../src/components/gameCard";

export default function MyCart() {
    const [isCart, setIsCart] = react.useState()
    const [myCart, setMyCart] = react.useState([])
    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
            setIsCart('Não tem game')
        } else {
            setMyCart(JSON.parse(localStorage.getItem('myShoppingCart')))
        }
    }, [myCart])

    return (
        <div className="p-5">
            {myCart.map((data, key) => {
                return (
                    <GameCardInCart
                        key={key}
                        game={data.game}
                        quantidade={data.quantidade}
                    />
                )
            })}
        </div>
    )
}