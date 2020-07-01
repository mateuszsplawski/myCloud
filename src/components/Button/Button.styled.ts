import styled from "styled-components";

export const StyledButton = styled.button<{
  active: boolean;
  secondary: boolean;
  warning: boolean;
  list: boolean;
}>`
  all: "unset";
  padding: 10px 20px;
  height: 40px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.s};
  border: 1px solid transparent;
  color: ${({ theme, active }) =>
    active ? theme.colors.black : theme.colors.white};
  font-weight: bold;
  background: ${({ theme, active, warning }) =>
    warning
      ? theme.colors.warning
      : active
      ? theme.colors.primaryLight
      : theme.colors.secondary};
  border-radius: ${({ active, list }) =>
    list && active ? "20px 20px 0 0" : "20px"};
  outline: none;
  transition: background 0.1s, border-radius 0.1s, color 0.1s, border 0.1s;

  svg {
    margin: 0 0 0 10px;
    font-size: ${({ theme }) => theme.fonts.m};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.black};
    border: ${({ secondary, theme }) =>
      secondary && `1px solid ${theme.colors.secondary}`};

    svg {
      color: ${({ theme, warning }) =>
        warning ? theme.colors.warning : theme.colors.secondary};
    }
  }

  .navigation__switch {
    background: ${({ theme, active }) =>
      active ? theme.colors.primaryLight : theme.colors.black};
  }
`;
