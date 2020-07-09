import styled from "styled-components";

export const StyledFavouriteCard = styled.li`
  background: ${({ theme }) => theme.colors.darkWhite};
  padding: 10px;
  list-style: none;
  margin: 10px;
  width: 100%;
  border-radius: 25px;
  display: flex;
  align-items: center;

  span {
    width: 75px;
    height: 75px;
    padding: 10px 0 0 0;
  }

  h2 {
    margin: 0 20px;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.l};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: bolder;
  }

  div {
    width: 100%;
    height: 100%;
    justify-self: flex-end;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ${({ theme }) => theme.media.m3} {
    div {
      flex-direction: column;

      p {
        text-align: center;
      }
    }
  }
`;
