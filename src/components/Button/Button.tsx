import React from "react";

import { StyledButton } from "./Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonInterface {
  handleClick: () => any;
  text?: string;
  icon?: IconDefinition;
}

export const Button: React.FC<ButtonInterface> = ({
  handleClick,
  text,
  icon,
}) => {
  return (
    <StyledButton onClick={() => handleClick()}>
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </StyledButton>
  );
};
