import React from "react";
import { render, within, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import App from "../App";

const emptyTasks = "tambah kegiatanmu hari ini!";

describe("Renders Todo List Correctly", () => {
  test("should show empty task", () => {
    const { getByText } = render(<TodoList />);
    const linkElement = getByText(emptyTasks);
    expect(linkElement).toBeInTheDocument();
  });
  const renderTodo = () => {
    render(<App />);
    return {
      newTodo: screen.getByLabelText("input-todo"),
      addButton: screen.getByRole("button", {
        name: "+",
      }),
      getTodo() {
        return screen.getAllByTestId("tasks").map((e) => ({
          name: within(e).getByTestId("task").textContent,
          deleteButton: within(e).getByText("x"),
        }));
      },
    };
  };
  test("should success add tasks", () => {
    const { addButton, getTodo, newTodo } = renderTodo();
    const addTask = "mengaji";
    expect(getTodo().find((task) => task.name === addTask)).not.toBeTruthy();
    fireEvent.change(newTodo, { target: { value: "mengaji" } });
    fireEvent.click(addButton);
    const linkElement = screen.getByText(addTask);
    expect(linkElement).toBeInTheDocument();
  });

  test("should success in deleting task", () => {
    const { getTodo } = renderTodo();

    const masakIkan = "masak ikan";

    const deleteMasak = getTodo().find(
      (task) => task.name === masakIkan
    ).deleteButton;

    fireEvent.click(deleteMasak);

    expect(getTodo().find((task) => task.name === masakIkan)).not.toBeTruthy();
  });
});
