import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export interface ButtonsProps {
  handleClick: any;
}

const Buttons: React.FunctionComponent<ButtonsProps> = ({ handleClick }) => {
  return (
    <StyledWrapper>
      <button onClick={() => handleClick(false)}>button1</button>
      <button onClick={() => handleClick(true)}>button2</button>
    </StyledWrapper>
  );
};

export default Buttons;
