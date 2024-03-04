import "../input/input.css";

export default function Input(props) {
  return (
    <form>
      <div className={props.type === "TEXT" ? "form text" : "form"}>
        <label htmlFor={props.type}>{props.type}</label>
        <input type="text" />
      </div>
    </form>
  );
}
