import styled from "styled-components";

export const StyledLogo = styled.header`
  margin: 20px 0 0 0;
  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.darkWhite};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.darkWhite};
    font-size: ${({ theme }) => theme.fonts.xxl};
    display: flex;
    flex-direction: column;
    position: relative;
    span {
      font-size: ${({ theme }) => theme.fonts.xl};
      position: absolute;
      top: -15px;
      left: -15px;
      transform: rotate(-15deg);
    }
  }
`;
