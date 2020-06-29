import styled from "styled-components";

export const StyledWeatherForecastList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
    width: 25%;
    list-style: none;

    &:last-of-type {
      border: none;
    }

    span {
      height: 30px;
      width: 50px;
    }

    p {
      font-size: ${({ theme }) => theme.fonts.s};
      &:first-of-type {
        font-size: ${({ theme }) => theme.fonts.m};
        font-weight: bolder;
      }
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    margin: 45px 0 0 0;
    width: 100%;

    li {
      div {
        height: 50px;
        width: 70px;
      }

      p {
        font-size: ${({ theme }) => theme.fonts.m};
        &:first-of-type {
          font-size: ${({ theme }) => theme.fonts.l};
        }
      }
    }
  }
`;
