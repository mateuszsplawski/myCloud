import React from "react";
import { Button } from "components/Button/Button";
import { StyledButtonGroup } from "./ButtonGroup.styled";
import { constants } from "./constants";

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
        <Button
          text={constants.buttonText.first}
          handleClick={() => handleClick(true)}
        />
        <Button
          text={constants.buttonText.second}
          handleClick={() => handleClick(false)}
        />
      </StyledButtonGroup>
    </>
  );
};
