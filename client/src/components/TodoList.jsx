import React from "react";
import {
  StyledDeleteButton,
  StyledHeader,
  StyledList,
  StyledSpan,
} from "../styled";

export default function TodoList({ tasks, deleteTask }) {
  if (!tasks || tasks.length === 0) {
    return (
      <React.Fragment>
        <StyledHeader>tambah kegiatanmu hari ini!</StyledHeader>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {tasks.map((task, idx) => (
        <StyledList key={idx} data-testid="tasks">
          <StyledSpan data-testid="task">{task}</StyledSpan>
          <StyledDeleteButton onClick={() => deleteTask(task)}>
            x
          </StyledDeleteButton>
        </StyledList>
      ))}
    </React.Fragment>
  );
}
