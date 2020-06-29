import styled from "styled-components";

export const StyledWeatherDetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    margin: 10px;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.3);
    list-style: none;
    border-radius: 25px;
    font-weight: bolder;
    padding: 30px 20px;
    font-size: ${({ theme }) => theme.fonts.m};

    p {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: normal;
      font-size: ${({ theme }) => theme.fonts.s};
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.media.tabletSmall} {
    width: 100%;
    margin: 50px 0 0 0;
    text-align: center;
  }
`;
