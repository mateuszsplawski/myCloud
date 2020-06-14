import styled from "styled-components";

export const StyledWeatherDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
  width: calc(100% / 3);
  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.grey};
    font-weight: lighter;
    font-size: ${({ theme }) => theme.fonts.xl};
  }

  h2 {
    font-weight: lighter;
    font-size: ${({ theme }) => theme.fonts.s};
    text-transform: uppercase;
  }

  h3 {
    margin: 15px 0 0 0;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.xxl};
  }

  div {
    height: 120px;
    width: 200px;
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.media.tabletSmall} {
    width: 100%;
  }
`;
