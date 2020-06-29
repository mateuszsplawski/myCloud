import styled from "styled-components";

export const StyledButton = styled.button<{ active: boolean }>`
  all: "unset";
  padding: 10px 20px;
  height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.s};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 10px 15px -10px ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  outline: none;

  svg {
    margin: 0 0 0 10px;
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  .navigation__switch {
    background: ${({ theme, active }) =>
      active ? theme.colors.primaryLight : theme.colors.black};
  }
`;
