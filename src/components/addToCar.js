import react, { useState } from "react";
import { useEffect } from "react";

export function AddToCar({ thisGame }) {
    // const toArray = []
    // const qual = []
    const [newProduct, setNewProduct] = react.useState([])
    const [dataBase, setDataBase] = react.useState([])


    const updateCart = () => {

    }



    return (
        <button
            onClick={(e) => {
                e.preventDefault()

                if (!localStorage.getItem('myShoppingCart')) {
                    setNewProduct([{"game": thisGame.name, "quantidade": 0}])
                    const toArray = [{"game": thisGame, "quantidade": 0}]
                    localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    console.log('não existe')
                    console.log(toArray)
                } else {
                    const allProducts = JSON.parse(localStorage.getItem('myShoppingCart'))
                    allProducts.map((data, key) => {
                        if (data.game.name === thisGame.name) {
                            data.quantidade = data.quantidade + 1
                            const toArray = [...allProducts]
                            localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                            console.log('ta execultando')
                        } else {
                            const toArray = [...allProducts, {"game": thisGame, "quantidade": 0}]
                            localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                        }
                    })
                }

            }}
            className="py-2 bg-seaBlue-300 px-5 rounded-[4px]"
        >
            Adicionar ao carrinho
        </button>
    )
}