import { useState } from "react";
import "../css/AddTaskPopup.css";

export const AddTaskPopup = (props) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const handleNewText = (e) => {
        setText(e.target.value)
    }
    const handleNewDate = (e) => {
        setDate(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        props.setTasks([...props.tasks, 
        {
            id: props.tasks.length + 1,
            text: text,
            date: date,
        }]);
            props.setActive(!props.active)
    }
    return (
        <div className={`popup ${props.active ? "active" : ""}`}>
            <form onSubmit={handleOnSubmit}>
                <input
                 name="text" 
                 type="text" 
                 placeholder="wpisz treść zadania" 
                 onChange={handleNewText} 
                 required={true}
                 />
                <input
                 name="date" 
                 type="date" 
                 onChange={handleNewDate}
                 required={true}/>
                <button type="submit">Dodaj zadanie</button>
            </form>
            <button onClick={props.addClass} className="cross">x</button>
        </div>
    )
}