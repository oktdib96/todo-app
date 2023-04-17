import { Item } from "./Item";
import "../css/TaskList.css"
export const TaskList = () => {
    return (
        <div className="tasks">
            <ul>
                <Item/>
            </ul>
        </div>
    )
}