import react, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import menuClose from './img/menuClose.svg'
import menuOpen from './img/menuOpen.svg'
import Link from "next/link";
import cart from './img/cart-icon.svg'
import { useRouter } from "next/router";

export function NavBar() {
    return (
        <header>
            <nav className={`w-full py-2 fixed bottom-0 left-0 justify-center items-center bg-primaryBlue-700 z-10
                flex h-fit md:py-7 md:relative
            `}>
                <ul className="w-full flex flex-row items-center justify-around gap-3
                    md:flex-row md:w-full md:max-w-screen-xl md:justify-center md:relative
                ">
                    <LiList href='' value="Home"/>
                    <LiList value="Games" href="games"/>
                    <li className="md:absolute md:right-5"><Cart/></li>
                </ul>
            </nav>
        </header>
    )
}

function LiList(props) {
    return (
        <Link href={`/${props.href}`}>
            <a className={`${props.className}`}>
                <li className={`text-white hover:text-primaryYellow-default`}>
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
            className={`${className ? className : 'relative'} w-[30px] h-[30px] md:w-[50px] md:h-[50px] md:p-2 hover:brightness-150`}
            onClick={(e) => { e.preventDefault;  router.push('/myCart')}}
        >
            <Image 
                layout="responsive"
                src={cart}
                alt='ir para para o seu carrinho de compras'
                priority
            />
            {myCart.length > 0
                ? (
                < div className={`w-[18px] h-[18px] md:p-0 md:w-[20px] md:h-[20px] bg-red-500 rounded-full absolute -top-1 -right-2 md:top-0 md:right-0 flex justify-center items-center text-white`}><p>{myCart.length}</p></div>
                )
                : (
                    null
                )
            }
        </button>
    )
}