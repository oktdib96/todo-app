import { Item } from "./Item";
import "../css/TaskList.css"
export const TaskList = (props) => {
    return (
        <div className="tasks">
            <ul>
                <Item tasks={props.tasks} setTasks={props.setTasks} remove={props.remove}/>
            </ul>
        </div>
    )
}