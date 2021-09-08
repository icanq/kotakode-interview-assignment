import React from "react";

export default function TodoList({ tasks }) {
  if (!tasks) {
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
          <button>x</button>
        </li>
      ))}
    </div>
  );
}
