import react, {useState} from "react";
import Image from 'next/image'
import closeModal from './img/menuClose.svg'
import rollLoading from './img/rollLoading.svg'
import hearth from './img/hearth.svg'

export function ModalCart({games, setModalVisible}) {
    return (
        <div className="fixed">
            <div
                onClick={(e) => {
                    e.preventDefault()
                    setModalVisible(false)
                 }}
                className="w-full h-full fixed top-0 left-0 bg-gray-900/[.7]"/>
            <div className="w-3/4 h-3/4 lg:w-full max-w-[1000px] lg:h-full md:max-h-[600px] fixed z-10 bg-gray-900 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-white flex sm:justify-center items-start rounded-[8px]">
                <div className="w-full h-full overflow-y-auto">
                    <PurchaseList
                        games={games}
                    />
                </div>
                <button
                    className="w-[40px] h-[40px] absolute top-5 right-5"
                    onClick={(e) => {
                        e.preventDefault()
                        setModalVisible(false)
                    }}
                >
                    <Image
                        alt="fixed"
                        src={closeModal}
                    />
                </button>
            </div>
        </div>
    )
}

function PurchaseList({ games }) {
    const total = games.length > 0 ? games.map((value) => value.quantidade * value.game.price).reduce((prev, current) => prev + current).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : null
    return (
        <div className="h-full w-full flex flex-col sm:justify-center items-center gap-4 p-5">
            {games.map((data, key) => {
                const subtotal = (data.quantidade * data.game.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                return (
                    <div className="w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-0" key={key}>
                        <div className="min-w-[100px] relative w-2/6  sm:w-1/4 md:w-1/6">
                            <Image
                                layout="responsive"
                                src={data.game.image}
                                alt={data.game.name}
                                priority
                            />
                        </div>
                        <div className="text-center sm:text-left flex flex-col gap-2">
                            <h3>{data.game.name}</h3>
                            <p className="flex justify-center sm:justify-start gap-2 items-center"><span className="bg-seaBlue-300 text-black px-2 py-1 rounded-[4px]">{data.quantidade}</span> <span>{subtotal}</span></p>
                        </div>
                    </div>
                )
            })}
            {total !== null ? <h2 className="text-center text-3xl">Total : {total}</h2> : null}
            {games.length === 0 ? <PurchaseComplete/> : <Purchase games={games}/>}
        </div>
    )
}

function Purchase({games}) {
    const [buttonValue, setButtonValue] = react.useState('finalizar compra')

    return (
        <button
            className="w-full bg-answer-success relative flex justify-center items-center min-h-[50px]"
            onClick={(e) => {
                e.preventDefault()
                setButtonValue(
                    <div className="w-[50px] relative rounded-full animate-spin">
                        <Image
                        layout="responsive"
                        src={rollLoading}
                        alt={'loading'}
                        />
                    </div>
                )
                setTimeout(() => {
                    setButtonValue('Compra finalizada')
                    localStorage.removeItem('myShoppingCart')
                }, 3000)
            }}
        >
            {buttonValue}
        </button>
    )
}

function PurchaseComplete() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <div className="w-2/4 sm:w-1/4 relative animate-pulse brightness-150">
                <Image
                    className=""
                    layout="responsive"
                    src={hearth}
                    alt='hearth'
                />
            </div>
            <h2 className="text-3xl text-center">OBRIGADO! VOLTE SEMPRE!</h2>
        </div>
    )
}