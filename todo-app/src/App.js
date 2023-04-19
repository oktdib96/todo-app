import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { StyledButton } from "./components/StyledButton";
import { AddTaskPopup } from "./components/AddTaskPopup";
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList/>
      <StyledButton primary >Dodaj zadanie</StyledButton>
      <StyledButton>Usuń wszystko</StyledButton>
      <AddTaskPopup/>

    </div>
  );
}

export default App;
