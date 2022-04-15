import react, { useState } from "react";
import { useEffect } from "react";
import { AddToCar } from "../src/components/addToCar";
import Image from "next/image";
import { GameCardInCart } from "../src/components/gameCard";
import { NavBar } from "../src/components/navBar";

export default function MyCart() {
    const [isCart, setIsCart] = react.useState()
    const [myCart, setMyCart] = react.useState([])
    const [seachMyCart, setSeachMyCart] = react.useState('')

    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
            setIsCart('Não tem game')
            localStorage.setItem('myShoppingCart', JSON.stringify([]))
            setMyCart(JSON.parse(localStorage.getItem('myShoppingCart')))
        } else {
            setMyCart(JSON.parse(localStorage.getItem('myShoppingCart')))
            if (myCart.length === 0) {
                setMyCart(JSON.parse(localStorage.getItem('myShoppingCart')))
            }
        }
        
    }, [myCart])

    return (
        <div className="h-fit pb-20 md:pb-0 min-h-screen">
            <NavBar/>
            <div className="flex flex-col justify-center items-center gap-5 p-5 max-w-screen-xl mx-auto">
                <div className="w-full py-5 px-5 rounded-[8px] bg-seaBlue-800">
                    <input
                        className="w-full border-2 border-seaBlue-300 rounded-[4px] p-2"
                        type={'text'}
                        value={seachMyCart}
                        onChange={(e) => {
                            setSeachMyCart(e.target.value)
                        }}
                        placeholder="Pesquise no Seu carrinho"
                    />
                </div>
                {myCart.filter((val) => {
                            if (seachMyCart === '') {
                                return val
                            } else if (val.game.name.toLowerCase().includes(seachMyCart.toLowerCase())) {
                                return val
                            }
                        }).map((data, key) => {
                    return (
                        <GameCardInCart
                            key={key}
                            game={data.game}
                            quantidade={data.quantidade}
                        />
                    )
                        })}
                
            </div>
            <PurchaseButton
                games={myCart}
            />
        </div>
    )
}


function PurchaseButton({}) {
    const [modalVisible, setModalVisible] = react.useState(false)
    const [myGameList, setMyGameList] = react.useState([])
    const toArray = []

    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
            setMyGameList(JSON.parse(localStorage.getItem('myShoppingCart')))
        } else {
            setMyGameList(JSON.parse(localStorage.getItem('myShoppingCart')))
            if (myGameList.length === 0) {
                setMyGameList(JSON.parse(localStorage.getItem('myShoppingCart')))
            }
        }
        
    }, [])

    return (
        <div>
            <button
                className={`p-3 bg-answer-success`}
                onClick={(e) => {
                    e.preventDefault()
                    setModalVisible(true)
                    setMyGameList(JSON.parse(localStorage.getItem('myShoppingCart')))
                    toArray.push(...myGameList)
                    console.log(myGameList)
                }}
            >
                COMPRAR
            </button>
            
            {modalVisible
                ? (
                    <div>
                        {console.log()}
                    </div>
                )
                : (
                    null   
                )}
        </div>
    )
}