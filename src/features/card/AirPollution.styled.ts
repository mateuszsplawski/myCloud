import styled from "styled-components";

export const StyledAirPollution = styled.div`
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .air {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    li {
      list-style: none;
    }

    &__quality {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: ${({ theme }) => theme.fonts.m};

      span {
        font-size: ${({ theme }) => theme.fonts.xl};
        font-weight: bolder;
        display: block;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100px;
        line-height: 100px;
        color: ${({ theme }) => theme.colors.white};
        height: 100px;
        margin: 15px;
        border-radius: 50%;
        background: green;
      }
    }

    div {
      display: flex;

      li {
        margin: 10px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.darkGrey};
        font-size: ${({ theme }) => theme.fonts.s};
        display: flex;
        flex-direction: column;
        text-align: center;

        span {
          font-size: ${({ theme }) => theme.fonts.l};
          color: ${({ theme }) => theme.colors.black};
          margin: 5px;
          font-weight: bolder;
        }
      }
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    margin: 45px 0 0 0;
    width: 100%;
  }
`;
