import styled from "styled-components";

export const StyledButtonGroup = styled.div<{ active: Boolean }>`
  display: flex;
  position: absolute;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  border: 1px solid ${({ theme }) => theme.colors.grey};
  width: 280px;
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
    background: ${({ theme }) => theme.colors.yellow};
    height: 100%;
    transform: translateY(-50%);
    transition: left 0.2s;
  }

  button {
    text-transform: uppercase;
    z-index: 2;
    position: relative;
    outline: none;
    cursor: pointer;
    padding: 10px 10px;
    width: 50%;
    font-size: ${({ theme }) => theme.fonts.xs};
    height: 100%;
    background: transparent;
    border: none;
    color: ${({ active, theme }) =>
      !active ? theme.colors.black : theme.colors.white};
    transition: color 0.2;
    font-weight: ${({ active }) => (!active ? "normal" : "bold")};

    &:first-of-type {
      color: ${({ active, theme }) =>
        !active ? theme.colors.white : theme.colors.black};
      font-weight: ${({ active }) => (!active ? "bold" : "normal")};
    }
  }
`;
