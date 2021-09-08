import React from "react";
import { StyledButton, StyledForm, StyledTextInput } from "../styled";

export const TodoForms = ({ newTask, setNewTask, add }) => {
  return (
    <React.Fragment>
      <StyledForm onSubmit={add}>
        <StyledTextInput
          id="newTodo"
          aria-label="input-todo"
          value={newTask}
          placeholder="mau ngapain hari ini?"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <StyledButton>+</StyledButton>
      </StyledForm>
    </React.Fragment>
  );
};
