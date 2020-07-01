import styled from "styled-components";

export const StyledIconButton = styled.button`
  width: 60px;
  position: relative;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  border-left: none;
  border-radius: 25px;
  border-top-left-radius: unset;
  border-bottom-left-radius: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
  outline: none;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
