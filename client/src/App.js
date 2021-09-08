import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TodoForms } from "./components/TodoForms";
import TodoList from "./components/TodoList";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import DarkTheme from "./themes/dark";
import { StyledContainer } from "./styled";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Poppins, sans-serif;
    background : #e9ecef;
  }
`;

function App() {
  const initialState = ["masak ikan", "minum air"];
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");
  const [theme, setTheme] = useState(DarkTheme);

  useEffect(() => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const add = (e) => {
    e.preventDefault();
    setTasks((prev) => [newTask, ...prev]);
    setNewTask("");
  };

  const deleteTask = (task) => {
    setTasks((prev) => prev.filter((e) => e !== task));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <Header tasks={tasks} />
        <TodoForms
          add={add}
          setTasks={setTasks}
          newTask={newTask}
          setNewTask={setNewTask}
        />
        <TodoList deleteTask={deleteTask} tasks={tasks} />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
