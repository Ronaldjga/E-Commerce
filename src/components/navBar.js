import react, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import menuClose from './img/menuClose.svg'
import menuOpen from './img/menuOpen.svg'
import Link from "next/link";
import cart from './img/cart-icon.svg'
import { useRouter } from "next/router";

export function NavBar() {
    const [isOpen, setIsOpen] = react.useState(false)
    const displayStyle = isOpen === false ? 'hidden' : 'flex'

    return (
        <header>
            <MenuMobile
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <nav className={`${displayStyle} h-full w-full fixed top-0 left-0 justify-center items-center bg-seaBlue-700 z-10
                md:flex md:h-fit md:py-7 md:relative
            `}>
                <ul className="flex flex-col items-center gap-3
                    md:flex-row md:w-full md:max-w-screen-xl md:justify-center md:relative
                ">
                    <LiList value="Home"/>
                    <LiList value="Games" href="Games"/>
                    <LiList className="md:absolute md:right-5" value={<Cart/>}/>
                </ul>
            </nav>
        </header>
    )
}

function MenuMobile(props) {
    const buttonValue = props.isOpen === false ? menuOpen : menuClose

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                if (props.isOpen === false) {
                    props.setIsOpen(true)
                } else {
                    props.setIsOpen(false)
                }
            }}
            className="text-3xl md:hidden w-[40px] h-[40px] fixed right-5 top-5 rounded-full z-20">
            <Image
                src={buttonValue}
                alt='menu button'
            />
        </button>
    )
}

function LiList(props) {
    return (
        <Link href={`#${props.href}`}>
            <a className={`${props.className}`}>
                <li className="text-white">
                    {props.value}
                </li>
            </a>
        </Link>
    )
}


export function Cart({className}) {
    const [myCart, setMyCart] = react.useState([])
    const router = useRouter()
    react.useEffect(() => {
        if (!localStorage.getItem('myShoppingCart')) {
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
        <button
            className={`${className ? className : 'relative'} w-[50px] h-[50px] p-2 rounded-full`}
            onClick={(e) => { e.preventDefault;  router.push('/myCart')}}
        >
            <Image 
                layout="responsive"
                src={cart}
                alt='ir para para o seu carrinho de compras'
            />
            {myCart.length > 0
                ? (
                < div className={`w-[20px] h-[20px] bg-red-500 rounded-full absolute top-0 right-0 flex justify-center items-center`}><p>{myCart.length}</p></div>
                )
                : (
                    null
                )
            }
        </button>
    )
}