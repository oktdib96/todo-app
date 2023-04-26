export const Item = (props) => {
    
    const Task = props.tasks.map(task => (
        <li key={task.id} id={task.id}>
            <p>{task.text}</p><span>zrobić do: {task.date}</span>
        </li>
    ) )

    return (
        <div>{Task}</div>
    )
}