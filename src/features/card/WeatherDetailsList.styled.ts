import styled from "styled-components";

export const StyledWeatherDetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  padding: 30px 0 0 0;

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
    padding: 25px 5px;
    font-size: ${({ theme }) => theme.fonts.l};
    position: relative;

    div {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.colors.primaryLight};
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: ${({ theme }) => theme.fonts.m};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    p {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: normal;
      font-size: ${({ theme }) => theme.fonts.s};
    }
  }

  ${({ theme }) => theme.media.m2} {
    li {
      width: 40%;
      margin: 20px 10px;
    }
  }

  ${({ theme }) => theme.media.m4} {
    li {
      font-size: ${({ theme }) => theme.fonts.m};

      p {
        font-size: ${({ theme }) => theme.fonts.xs};
      }
    }
  }
`;
