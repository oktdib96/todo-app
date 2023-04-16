import {useState} from "react";

export const Item = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1, 
            text: 'Pierwsze zadanie',
            date: "2024-10-12"
        },
        {
            id: 2, 
            text: 'Drugie zadanie',
            date: "2024-06-02"
        },
        {
            id: 3, 
            text: 'Trzecie zadanie',
            date: "2024-12-05"
        }
    ])
    const Task = tasks.map(task => (
        <li key={task.id} id={task.id}>
            <p>{task.text} <span>zrobić do: {task.date}</span></p>
        </li>
    ) )
    return (
        <div>{Task}</div>
    )
}