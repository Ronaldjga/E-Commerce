import react, { useState } from "react";
import { useEffect } from "react";
import rollLoading from './img/rollLoading.svg'
import Image from "next/image";

export function AddToCar({ thisGame, thisAmount}) {
    const [newProduct, setNewProduct] = react.useState([])
    const [buttonValue, setButtonValue] = react.useState('Adicionar ao carrinho')
    const [buttonStyle, setButtonStyle] = react.useState('')

    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
            setButtonValue('Adicionar ao carrinho')
        } else {
            const allProducts = JSON.parse(localStorage.getItem('myShoppingCart'))
            if (allProducts.find(e => e.game.name === thisGame.name && e.quantidade !== thisAmount)) {
                setButtonValue('Atualizar carrinho')
                setButtonStyle('bg-answer-success')
            } else if (allProducts.find(e => e.game.name === thisGame.name && e.quantidade === thisAmount)) {
                setButtonValue('Quantidade já adicionada')
                setButtonStyle('bg-answer-failure')
            }
        }
    }, [thisAmount])

    const buttonAnimation = (value) => {
        setButtonValue(
            <div className="w-full justify-center items-center gap-2 flex">
                <div className="w-[30px] animate-spin">
                    <Image
                    layout="responsive"
                    src={rollLoading}
                    alt={'loading'}
                    />
                </div>
                <p>
                    Carregando
                </p>
            </div>)
        setTimeout(() => {
            setButtonValue(value)
        }, 1500);
    }

    const buttonConfig = (valor) => {
        if (valor === 'quantidade já adicionada') {
            setButtonStyle('bg-answer-failure')
        } else {
            setButtonStyle('bg-answer-success')
        }
        buttonAnimation(valor)
    }

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                const allProducts = JSON.parse(localStorage.getItem('myShoppingCart'))
                if (!localStorage.getItem('myShoppingCart')) {
                    const toArray = [{"game": thisGame, "quantidade": thisAmount}]
                    localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    buttonConfig('Quantidade já adicionada')
                    console.log(toArray)
                } else {
                    setButtonValue(`Atualizar o carinho`)
                    if (allProducts.find(e => e.game.name === thisGame.name && e.quantidade === thisAmount)) {
                        setButtonStyle('bg-answer-failure')
                        setButtonValue('quantidade já adicionada')
                        return
                    } else if (allProducts.find(e => e.game.name === thisGame.name && e.quantidade !== thisAmount)) {
                        allProducts.map((data) => data.game.name === thisGame.name ? data.quantidade= thisAmount : null)
                        const toArray = [...allProducts]
                        localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                        buttonConfig('adicionado ao carrinho')
                    } else if (allProducts.find(e => e.game.name !== thisGame.name)) {
                        const toArray = [...allProducts, {"game": thisGame, "quantidade": thisAmount}]
                        localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    }
                    
                }
                
            }}
            className={`${buttonStyle} flex justify-center items-center py-2 bg-seaBlue-300 px-5 rounded-[4px]`}
        >
            {buttonValue}
        </button>
    )
}