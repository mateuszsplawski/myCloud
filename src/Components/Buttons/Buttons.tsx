import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div<{ active: Boolean }>`
  display: flex;
  position: absolute;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  border: 1px solid lightgray;
  height: 40px;
  width: 200px;
  border-radius: 60px;
  background: whitesmoke;

  ::after {
    display: block;
    width: 50%;
    content: "";
    border-radius: 60px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: ${({ active }) => (!active ? "0" : "50%")};
    background: ${({ theme }) => theme.colors.blue};
    height: 100%;
    transform: translateY(-50%);
    transition: left 0.2s;
  }

  button {
    z-index: 2;
    position: relative;
    outline: none;
    cursor: pointer;
    width: 50%;
    font-size: 14px;
    height: 100%;
    background: transparent;
    border: none;
    color: ${({ active, theme }) =>
      !active ? theme.colors.black : theme.colors.white};
    transition: color 0.2;

    &:first-of-type {
      color: ${({ active, theme }) =>
        !active ? theme.colors.white : theme.colors.black};
    }
  }
`;

export interface ButtonsProps {
  handleClick: any;
  active: Boolean;
}

const Buttons: React.FC<ButtonsProps> = ({ active, handleClick }) => {
  return (
    <StyledWrapper active={active}>
      <button onClick={() => handleClick(false)}>Prognoza pogody</button>
      <button onClick={() => handleClick(true)}>Jakość powietrza</button>
    </StyledWrapper>
  );
};

export default Buttons;
