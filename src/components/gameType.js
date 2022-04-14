import react from "react";

export function GameType(props) {
    return (
        <div className="w-full p-5">
            <ul className="flex justify-between">
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
                    value="Esporte" />
                <LiType
                    seachType={props.seachType}
                    setSeachType={props.setSeachType}
                    value="Luta" />
            </ul>
        </div>
    )
}

function LiType(props) {
    const checked = props.seachType === props.value ? 'text-primaryGreen-default' : 'text-white'
    return (
        <li className={`${checked}`}>
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