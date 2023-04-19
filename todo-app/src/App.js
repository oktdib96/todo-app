import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { StyledButton } from "./components/StyledButton";
import { AddTaskPopup } from "./components/AddTaskPopup";
import "./css/App.css"

function App() {
  const [active, setActive] = useState(false);
  const addClass = () => {
    setActive(!active)
  }
  return (
    <div className="App">
      <Header/>
      <TaskList/>
      <StyledButton primary onClick={addClass}>Dodaj zadanie</StyledButton>
      <StyledButton>Usuń wszystko</StyledButton>
      {active ? <AddTaskPopup addClass={addClass} active={active} setActive={setActive}/> : null}

    </div>
  );
}

export default App;
