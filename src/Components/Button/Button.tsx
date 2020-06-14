import React from "react";

import { StyledButton } from "./Button.styled";

interface ButtonInterface {
  handleClick: () => any;
  text?: string;
}

export const Button: React.FC<ButtonInterface> = ({ handleClick, text }) => {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};
