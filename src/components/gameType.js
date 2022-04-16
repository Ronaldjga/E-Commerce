import react from "react";

export function GameType(props) {
    return (
        <div className="w-full p-5">
            <ul className="flex justify-center sm:justify-between flex-wrap gap-3">
                <LiType
                    seachType={props.seachType}
                    setSeachType={props.setSeachType}
                    value="Ação" />
                <LiType
                    seachType={props.seachType}
                    setSeachType={props.setSeachType}
                    value="Aventura" />
                <LiType
                    seachType={props.seachType}
                    setSeachType={props.setSeachType}
                    value="Fantasia" />
                <LiType
                    seachType={props.seachType}
                    setSeachType={props.setSeachType}
                    value="Esporte" />
                <LiType
                    seachType={props.seachType}
                    setSeachType={props.setSeachType}
                    value="Drama" />
                <LiType
                    seachType={props.seachType}
                    setSeachType={props.setSeachType}
                    value="Terror" />
            </ul>
        </div>
    )
}

function LiType(props) {
    const checked = props.seachType === props.value ? 'text-seaBlue-900  bg-answer-success rounded-[8px]' : 'text-white'
    return (
        <li className={`${checked}  py-1 px-2`}>
            <button onClick={(e) => {
                e.preventDefault()
                if (props.seachType === props.value) {
                    props.setSeachType('')
                } else {
                    props.setSeachType(props.value)
                }
            }}>
                {props.value}
            </button>
        </li>
    )
}