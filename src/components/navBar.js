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
            {/* <MenuMobile
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            /> */}
            <nav className={`w-full py-2 fixed bottom-0 left-0 justify-center items-center bg-seaBlue-700 z-10
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
            className="text-3xl md:hidden w-[45px] h-[45px] fixed right-2 top-2 rounded-full z-20 border-2 border-black">
            <Image
                src={buttonValue}
                alt='menu button'
            />
        </button>
    )
}

function LiList(props) {
    return (
        <Link href={`/${props.href}`}>
            <a className={`${props.className}`}>
                <li className={`text-white`}>
                    {props.value}
                </li>
                
            </a>
        </Link>
    )
}


export function Cart({className}) {
    const [myCart, setMyCart] = react.useState([])
    const router = useRouter()
    const checked = router.pathname === '/myCart' ? 'border-b-2 border-primaryGreen-default' : ''
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
            className={`${className ? className : 'relative'} ${checked} w-[30px] h-[30px] md:w-[50px] md:h-[50px] md:p-2`}
            onClick={(e) => { e.preventDefault;  router.push('/myCart')}}
        >
            <Image 
                layout="responsive"
                src={cart}
                alt='ir para para o seu carrinho de compras'
            />
            {myCart.length > 0
                ? (
                < div className={`w-[18px] h-[18px] md:p-0 md:w-[20px] md:h-[20px] bg-red-500 rounded-full absolute -top-1 -right-2 md:top-0 md:right-0 flex justify-center items-center`}><p>{myCart.length}</p></div>
                )
                : (
                    null
                )
            }
        </button>
    )
}