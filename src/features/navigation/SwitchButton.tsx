import React from "react";

import { StyledSwitchButton } from "./SwitchButton.styled";

interface SwitchButtonInterface {
  handleClick: () => void;
  active: boolean;
}

export const SwitchButton: React.FC<SwitchButtonInterface> = ({
  handleClick,
  active,
}) => {
  return (
    <StyledSwitchButton>
      <input
        checked={active}
        onChange={() => handleClick()}
        type="checkbox"
        name="toogle_button"
      />
      <span></span>
    </StyledSwitchButton>
  );
};
