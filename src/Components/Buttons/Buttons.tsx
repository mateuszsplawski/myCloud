import React from "react";

import { StyledButtons } from "./ Buttons.styled";

export interface ButtonsProps {
  handleClick: (value: boolean) => any;
  active: boolean;
}

const Buttons: React.FC<ButtonsProps> = ({ active, handleClick }) => {
  return (
    <StyledButtons className="buttons" active={active}>
      <button className="buttons__weather" onClick={() => handleClick(false)}>
        Prognoza pogody
      </button>
      <button className="buttons__air" onClick={() => handleClick(true)}>
        Jakość powietrza
      </button>
    </StyledButtons>
  );
};

export default Buttons;
