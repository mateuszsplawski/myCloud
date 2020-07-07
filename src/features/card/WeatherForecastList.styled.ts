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

  ${({ theme }) => theme.media.m1} {
    margin: 0 0 30px 0;

    li {
      padding: 30px 10px;
    }
  }

  ${({ theme }) => theme.media.m2} {
    padding: 40px 0 0 0;
    margin: unset;

    ul {
      border-radius: unset;
      overflow: scroll;
      justify-content: unset;
    }

    li {
      padding: 40px 20px;
    }
  }
`;
