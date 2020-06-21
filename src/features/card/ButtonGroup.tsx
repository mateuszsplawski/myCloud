import React from "react";
import { Button } from "components/Button/Button";
import { StyledButtonGroup } from "./ButtonGroup.styled";

interface ButtonGroupInterface {
  handleClick: (cardView: boolean) => any;
  active: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupInterface> = ({
  handleClick,
  active,
}) => {
  return (
    <>
      <StyledButtonGroup active={active}>
        <Button text={"1"} handleClick={() => handleClick(true)} />
        <Button text={"2"} handleClick={() => handleClick(false)} />
      </StyledButtonGroup>
    </>
  );
};
