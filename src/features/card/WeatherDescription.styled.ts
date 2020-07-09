import styled from "styled-components";

export const StyledWeatherDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 500px;
  border-radius: 25px 0 0 25px;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  position: relative;

  .weather__text {
    margin: 20px 0;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      font-family: ${({ theme }) => theme.fonts.secondary};
      text-shadow: 0 0 1px ${({ theme }) => theme.colors.white};
      font-weight: lighter;
      font-size: ${({ theme }) => theme.fonts.xxl};
    }

    h2 {
      font-weight: lighter;
      font-size: ${({ theme }) => theme.fonts.m};
      text-transform: uppercase;
    }

    h3 {
      margin: 15px 0 0 0;
      font-weight: bold;
      font-size: ${({ theme }) => theme.fonts.xxl};
    }
  }

  span {
    height: 50%;
    width: 100%;
  }

  ${({ theme }) => theme.media.m1} {
    width: 100%;
    border-radius: 25px 25px 0 0;
    flex-direction: row;
    height: 250px;

    span {
      height: 250px;
      width: 200px;
    }
  }

  ${({ theme }) => theme.media.m2} {
    flex-wrap: wrap;
    height: 400px;

    .weather__text {
      width: 50%;
    }

    span {
      width: 50%;
    }
  }

  ${({ theme }) => theme.media.m3} {
    flex-direction: column;
    height: 100%;

    .weather__text {
      width: 100%;
    }

    span {
      width: 100%;
    }
  }
`;
