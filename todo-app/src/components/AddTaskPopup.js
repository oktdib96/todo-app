import "../css/AddTaskPopup.css";

export const AddTaskPopup = (props) => {
    return (
        <div className={`popup ${props.active ? "active" : ""}`}>
            <form>
                <input type="text" placeholder="wpisz treść zadania"/>
                <input type="date"/>
                <button type="submit">Dodaj zadanie</button>
            </form>
            <button onClick={props.addClass} className="cross">x</button>
        </div>
    )
}