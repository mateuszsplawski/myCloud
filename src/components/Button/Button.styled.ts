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
  border: 1px solid transparent;
  color: ${({ theme, active }) =>
    active ? theme.colors.black : theme.colors.white};
  font-weight: bold;
  background: ${({ theme, active }) =>
    active ? theme.colors.primaryLight : theme.colors.secondary};
  border-radius: ${({ active }) => (active ? "25px 25px 0 0" : "25px")};
  outline: none;
  transition: background 0.1s, border-radius 0.1s, color 0.1s;

  svg {
    margin: 0 0 0 10px;
  }

  :hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.black};
  }

  .navigation__switch {
    background: ${({ theme, active }) =>
      active ? theme.colors.primaryLight : theme.colors.black};
  }
`;
