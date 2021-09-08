import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoForms } from "./components/TodoForms";
import TodoList from "./components/TodoList";

function App() {
  const initialState = ["masak ikan", "minum air"];
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");

  const add = (e) => {
    e.preventDefault();
    setTasks((prev) => [newTask, ...prev]);
    setNewTask("");
  };

  return (
    <div className="App">
      <Header />
      <TodoForms
        add={add}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
