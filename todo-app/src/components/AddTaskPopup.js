import "../css/AddTaskPopup.css";

export const AddTaskPopup = () => {
    return (
        <div className="popup">
            <form>
                <input type="text" placeholder="wpisz treść zadania"/>
                <input type="date"/>
                <button type="submit">Dodaj zadanie</button>
            </form>
            <button className="cross">x</button>
        </div>
    )
}