import React from "react";

import { StyledButton } from "./Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonInterface {
  handleClick: any;
  text?: string;
  icon?: IconDefinition;
  value?: string;
  active?: boolean;
  name?: string;
  secondary?: boolean;
  warning?: boolean;
  list?: boolean;
  badge?: string | number;
}

export const Button: React.FC<ButtonInterface> = ({
  handleClick,
  text,
  icon,
  value,
  active,
  name,
  secondary,
  warning,
  list,
  badge,
}) => {
  return (
    <StyledButton
      badge={badge}
      list={list}
      warning={warning}
      secondary={secondary}
      className={name}
      active={active}
      value={value}
      text={text}
      onClick={(param) => handleClick(param)}
    >
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
      {(badge || badge === 0) && <span>{badge}</span>}
    </StyledButton>
  );
};
