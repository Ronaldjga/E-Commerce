import react, { useState } from "react";
import { useEffect } from "react";
import { AddToCar } from "../src/components/addToCar";
import Image from "next/image";
import { GameCardInCart } from "../src/components/gameCard";
import { NavBar } from "../src/components/navBar";
import { ModalCart } from "../src/components/modalCart";

export default function MyCart() {
    const [isCart, setIsCart] = react.useState()
    const [myCart, setMyCart] = react.useState([])
    const [modalVisible, setModalVisible] = react.useState(false)
    const [seachMyCart, setSeachMyCart] = react.useState('')
    const gameListStyle = myCart.length === 0 ? '' : 'bg-gray-500'

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
                <div className={`${gameListStyle} w-full p-2 rounded-[8px] flex flex-col gap-2`}>
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
                
                {myCart.length === 0 ? null : <PurchaseButton setModalVisible={setModalVisible} />}
                {modalVisible === true ? (
                    <ModalCart
                        games={myCart}
                        setModalVisible={setModalVisible}
                    >
                        {myCart.map((data, key) => {
                            return (
                                <div key={key}>

                                </div>
                            )
                        })}
                    </ModalCart>                
                )
                    : (
                        null
                )}
            </div>
        </div>
    )
}


function PurchaseButton({setModalVisible}) {

    return (
        <button
            className={`w-full max-w-screen-xl mx-auto p-3 bg-answer-success rounded-[8px] font-bold hover:brightness-110`}
            onClick={(e) => {
                e.preventDefault()
                setModalVisible(true)
            }}
        >
            Prosseguir com a Compra
        </button>
    )
}