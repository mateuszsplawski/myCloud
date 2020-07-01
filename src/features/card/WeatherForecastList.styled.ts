import styled from "styled-components";

export const StyledWeatherForecastList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  padding: 40px;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    list-style: none;

    &:last-of-type {
      border: none;
    }

    span {
      height: 30px;
      width: 50px;
      margin: 0 0 10px 0;
    }

    p {
      font-size: ${({ theme }) => theme.fonts.s};
      &:first-of-type {
        font-size: ${({ theme }) => theme.fonts.l};
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
