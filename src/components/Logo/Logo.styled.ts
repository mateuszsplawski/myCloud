import styled from "styled-components";

export const StyledLogo = styled.header`
  position: absolute;
  top: -30px;
  left: -30px;
  transform: scale(0.4);

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.darkBlue};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fonts.xxl};
    display: flex;
    flex-direction: column;
    position: relative;

    span {
      font-size: ${({ theme }) => theme.fonts.xl};
      position: absolute;
      top: -25px;
      left: 35px;
    }

    svg {
      transform: scale(2.7);
      position: absolute;
      top: -45px;
      left: 0px;
      z-index: -1;
    }
  }
`;
