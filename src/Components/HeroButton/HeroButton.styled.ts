import styled from "styled-components";

export const StyledHeroButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.xs};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme }) => theme.colors.yellow};
  box-shadow: 0px 10px 15px -10px ${({ theme }) => theme.colors.yellow};
  border-radius: 15px;
  outline: none;
`;
