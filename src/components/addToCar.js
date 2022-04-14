import react, { useState } from "react";
import { useEffect } from "react";

export function AddToCar({ thisGame, thisAmount}) {
    const [newProduct, setNewProduct] = react.useState([])
    const [buttonValue, setButtonValue] = react.useState('Adicionar ao carrinho')

    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
            setButtonValue('Adicionar ao carrinho')
        } else {
            setButtonValue('Atualizar carrinho')
        }
    }, [])

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                const allProducts = JSON.parse(localStorage.getItem('myShoppingCart'))
                if (!localStorage.getItem('myShoppingCart')) {
                    const toArray = [{"game": thisGame, "quantidade": thisAmount}]
                    localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    console.log('não existe')
                    console.log(toArray)
                } else {
                    setButtonValue(`Atualizar o carinho`)
                    if (allProducts.find(e => e.game.name === thisGame.name && e.quantidade === thisAmount)) {
                        return
                    } else if (allProducts.find(e => e.game.name === thisGame.name && e.quantidade !== thisAmount)) {
                        allProducts.map((data) => data.game.name === thisGame.name ? data.quantidade= thisAmount : null)
                        const toArray = [...allProducts]
                        localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    } else if (allProducts.find(e => e.game.name !== thisGame.name)) {
                        const toArray = [...allProducts, {"game": thisGame, "quantidade": thisAmount}]
                        localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    }
                    // allProducts.map((data, key) => {
                    //     if (data.game.name === thisGame.name && data.quantidade !== thisAmount) {
                    //         data.quantidade = thisAmount
                    //         const toArray = [...allProducts]
                    //         localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    //         console.log('ta execultando')
                        
                    //     } else if (data.game.name.includes(thisGame.name)) {
                    //         return
                    //     } else {
                    //         const toArray = [...allProducts, {"game": thisGame, "quantidade": thisAmount}]
                    //         localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    //     }
                    //     console.log(data.game.name.includes(thisGame.name))
                    // })
                }
                
            }}
            className="py-2 bg-seaBlue-300 px-5 rounded-[4px]"
        >
            {buttonValue}
        </button>
    )
}