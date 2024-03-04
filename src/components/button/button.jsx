import "../button/button.css"

export default function Button(props) {
    return <button className={props.isOutline ? "outline" : "black"}>
        {props.icon}
        {props.text}
    </button>
}