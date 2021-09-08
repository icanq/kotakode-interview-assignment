import React from "react";

export default function TodoList({ tasks, deleteTask }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div>
        <h4>tambah kegiatanmu hari ini!</h4>
      </div>
    );
  }
  return (
    <div>
      {tasks.map((task, idx) => (
        <li key={idx} data-testid="tasks">
          <span data-testid="task">{task}</span>
          <button onClick={() => deleteTask(task)}>x</button>
        </li>
      ))}
    </div>
  );
}
