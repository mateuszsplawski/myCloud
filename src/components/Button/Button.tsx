import React from "react";

import { StyledButton } from "./Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonInterface {
  handleClick: (param?: any) => any;
  text?: string;
  icon?: IconDefinition;
  value?: string;
  active?: boolean;
  name?: string;
}

export const Button: React.FC<ButtonInterface> = ({
  handleClick,
  text,
  icon,
  value,
  active,
  name,
}) => {
  return (
    <StyledButton
      className={name}
      active={active}
      value={value}
      onClick={(param) => handleClick(param)}
    >
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </StyledButton>
  );
};
