import "./AboutText.css"
import { IAbout } from "../interfaces/about"

export default function Text(props: IAbout) {
    return (
        <div className={"text-container"}>
            <div className={"title"}>
                {props.title}
            </div>
            <div className={"text"}>
                {props.text}
            </div>
        </div>

    )
}