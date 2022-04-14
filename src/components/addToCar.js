import react, { useState } from "react";
import { useEffect } from "react";
import rollLoading from './img/rollLoading.svg'
import Image from "next/image";
import trashIcon from './img/trashIcon.svg'

export function AddToCar({ thisGame, thisAmount}) {
    const [newProduct, setNewProduct] = react.useState([])
    const [buttonValue, setButtonValue] = react.useState('Adicionar ao carrinho')
    const [buttonStyle, setButtonStyle] = react.useState('')

    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
            setButtonValue('Adicionar ao carrinho')
        } else {
            const allProducts = JSON.parse(localStorage.getItem('myShoppingCart'))
            if (allProducts.find(e => e.game.name === thisGame.name && parseFloat(e.quantidade) !== parseFloat(thisAmount))) {
                setButtonValue('Atualizar carrinho')
                setButtonStyle('bg-answer-success')
            } else if (allProducts.find(e => e.game.name === thisGame.name && parseFloat(e.quantidade) === parseFloat(thisAmount))) {
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
        if (valor === 'quantidade já adicionada' || valor === 'quantidade invalida') {
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
                if (thisAmount === '' || thisAmount === '0') {
                    buttonConfig('quantidade invalida')
                    return
                } else if (!localStorage.getItem('myShoppingCart')) {
                    const toArray = [{"game": thisGame, "quantidade": thisAmount}]
                    localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    buttonConfig('quantidade já adicionada')
                    console.log(toArray)
                } else if (allProducts.length === 0) {
                    const toArray = [{"game": thisGame, "quantidade": thisAmount}]
                    localStorage.setItem('myShoppingCart', JSON.stringify(toArray))
                    buttonConfig('Quantidade já adicionada')
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


export function DeleteGame({thisGame}) {
    const [deleteValue, setDeleteValue] = react.useState(
        <div className="p-2 relative">
            <Image
            layout="responsive"
            src={trashIcon}
            alt='delete'
            />
        </div>
    )

    return (
        <button
            className="w-[40px] h-[40px] bg-answer-failure rounded-full absolute top-5 right-5"
            onClick={(e) => {
                e.preventDefault()
                setDeleteValue(
                    <div className="p-1 relative animate-spin">
                        <Image
                        layout="responsive"
                        src={rollLoading}
                        alt={'loading'}
                        />
                    </div>

                )
                setTimeout(() => {
                    const allProducts = JSON.parse(localStorage.getItem('myShoppingCart'))
                    const newProduct = allProducts.filter((data, i) => {
                        return data.game.name !== thisGame.name
                    })
                    localStorage.setItem('myShoppingCart', JSON.stringify(newProduct))
                    setDeleteValue(
                        <div className="p-2 relative">
                            <Image
                            layout="responsive"
                            src={trashIcon}
                            alt='delete'
                            />
                        </div>
                    )
                }, 1500)

            }}
        >
            {deleteValue}
        </button>
    )
}


export function ButtonAmount({setAmount, amount}) {
    

    return (
        <div className="flex justify-between">
            <ModifyQuantity
                amount={amount}
                setAmount={setAmount}
                value='-'
            />
            <input
                className="w-1/3 text-center"
                type={'text'}
                required
                minLength={1}
                maxLength={10}
                value={amount}
                pattern="[0-9]+$"
                onChange={(e) => {
                    setAmount(e.target.value.replace(/\D/g, ''))
                }}
            />
            <ModifyQuantity
                amount={amount}
                setAmount={setAmount}
                value='+'
            />
        </div>
    )
}

function ModifyQuantity({value ,amount ,setAmount}) {
    return (
        <button
            className="w-1/4 h-full bg-seaBlue-400 rounded-[4px] text-2xl text-white"
            onClick={(e) => {
            e.preventDefault()
            if (value === '+') {
                amount > 0 ? setAmount(parseFloat(amount) + 1) : null
            } else if (value === '-') {
                amount > 1 ? setAmount(parseFloat(amount) - 1) : null
            }
        }}>
            {value}
        </button>
    )
}