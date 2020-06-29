import React from "react";
import { Button } from "components/Button/Button";
import { StyledButtonGroup } from "./ButtonGroup.styled";
import { constants } from "./constants";

interface ButtonGroupInterface {
  handleClick: (e: any) => any;
  active: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupInterface> = ({
  handleClick,
  active,
}) => {
  return (
    <StyledButtonGroup active={active}>
      <Button
        text={constants.buttonText.first}
        value={"siema"}
        handleClick={(e) => handleClick(e)}
      />
      <Button
        text={constants.buttonText.second}
        value={"siema"}
        handleClick={(e) => handleClick(e)}
      />
    </StyledButtonGroup>
  );
};
