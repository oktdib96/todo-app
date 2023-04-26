import { useState} from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { StyledButton } from "./components/StyledButton";
import { AddTaskPopup } from "./components/AddTaskPopup";
import "./css/App.css"

function App() {
  const [active, setActive] = useState(false);
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
]);

  const addClass = () => {
    setActive(!active)
  }
  return (
    <>
    <div className="App" style={active ? {filter: "blur(10px"} : null}>
      <Header/>
      <TaskList tasks={tasks}/>
      <StyledButton primary onClick={addClass}>Dodaj zadanie</StyledButton>
      <StyledButton>Usuń wszystko</StyledButton>
    </div>
    {active ? <AddTaskPopup  addClass={addClass} active={active} setActive={setActive} tasks={tasks} setTasks={setTasks}/> : null}
    </>
  );
}

export default App;
