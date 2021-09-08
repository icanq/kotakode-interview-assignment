import React from "react";
import StyledHeader from "../styled/StyledHeader";

export const Header = ({ tasks }) => {
  return (
    <React.Fragment>
      {tasks.length ? (
        <StyledHeader>Kamu punya {tasks.length} kerjaan🦾</StyledHeader>
      ) : (
        <StyledHeader>Kamu gapunya kerjaan👀</StyledHeader>
      )}
    </React.Fragment>
  );
};
