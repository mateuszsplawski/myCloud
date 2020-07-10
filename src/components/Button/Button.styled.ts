import styled from "styled-components";

export const StyledButton = styled.button<{
  active: boolean;
  secondary: boolean;
  warning: boolean;
  list: boolean;
  badge: string | number;
  text: string;
}>`
  all: "unset";
  padding: ${({ text }) => text && "10px 20px"};
  height: 40px;
  min-height: ${({ text }) => !text && "40px"};
  width: ${({ text }) => !text && "40px"};
  min-width: ${({ text }) => !text && "40px"};
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  font-size: ${({ theme, text }) => (text ? theme.fonts.s : theme.fonts.m)};
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
  border-radius: ${({ active, list, text }) =>
    text ? (list && active ? "20px 20px 0 0" : "20px") : "50%"};
  outline: none;
  transition: background 0.1s, border-radius 0.1s, color 0.1s, border 0.1s;

  svg {
    margin: ${({ text }) => text && "0 0 0 10px"};
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

  span {
    content: ${({ badge }) => (badge !== 0 ? badge : 0)};
    position: absolute;
    display: block;
    top: 50%;
    transform: translate(50%, -50%);
    right: 0;
    background: ${({ theme }) => theme.colors.primaryLight};
    color: black;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigation__switch {
    background: ${({ theme, active }) =>
      active ? theme.colors.primaryLight : theme.colors.black};
  }
`;
