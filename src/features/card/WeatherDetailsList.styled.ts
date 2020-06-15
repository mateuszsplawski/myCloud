import styled from "styled-components";

export const StyledWeatherDetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: calc(100% / 3);

  li {
    width: 50%;
    list-style: none;
    font-weight: bolder;
    padding: 15px 0;
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
