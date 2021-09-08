import React from "react";

export const TodoForms = ({ newTask, setNewTask, add }) => {
  return (
    <React.Fragment>
      <form onSubmit={add}>
        <input
          id="newTodo"
          aria-label="input-todo"
          value={newTask}
          placeholder="mau ngapain hari ini?"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>+</button>
      </form>
    </React.Fragment>
  );
};
