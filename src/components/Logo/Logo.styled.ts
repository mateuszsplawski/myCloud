import styled from "styled-components";

export const StyledLogo = styled.header`
  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primaryDark};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.primaryDark};
    font-size: ${({ theme }) => theme.fonts.l};
    display: flex;
    flex-direction: column;
    position: relative;
    span {
      font-size: ${({ theme }) => theme.fonts.s};
      position: absolute;
      top: -10px;
      left: -10px;
      transform: rotate(-15deg);
    }
  }
`;
