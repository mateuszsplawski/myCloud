import styled from "styled-components";

export const StyledWeatherForecastList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

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
