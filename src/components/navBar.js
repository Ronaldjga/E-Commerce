import react, { useState } from "react";
import Image from "next/image";
import menuClose from './img/menuClose.svg'
import menuOpen from './img/menuOpen.svg'

export function NavBar() {
    const [isOpen, setIsOpen] = react.useState(false)
    const displayStyle = isOpen === false ? 'hidden' : 'flex'

    return (
        <header>
            <MenuMobile
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <nav  className={`${displayStyle} h-full w-full fixed top-0 left-0 justify-center items-center bg-seaBlue-800`}>
                <ul className="flex flex-col items-center gap-3">
                    <LiList value="qualquer coisa"/>
                    <LiList value="qualquer coisa"/>
                    <LiList value="qualquer coisa"/>
                    <LiList value="qualquer coisa"/>
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
        <li className="text-white">
            {props.value}
        </li>
    )
}