import { useState, createContext } from "react";
import CreateList from "./components/CreateList";
import DisplayList from "./components/DisplayList";
import "./App.css";

export const appContext = createContext();
function App() {
  const [taskList, setTaskList] = useState([{ title: "Task 1", id: "2" }]);

  function handleDelete(id) {
    let remTasks = taskList.filter((task) => task.id !== id);
    setTaskList(remTasks);
  }
  return (
    <appContext.Provider value={{ taskList, handleDelete, setTaskList }}>
      <div className="App">
        <CreateList />
        <DisplayList />
      </div>
    </appContext.Provider>
  );
}

export default App;
