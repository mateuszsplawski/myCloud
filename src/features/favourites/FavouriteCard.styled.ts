import styled from "styled-components";

export const StyledFavouriteCard = styled.li`
  background: ${({ theme }) => theme.colors.darkWhite};
  padding: 20px;
  list-style: none;
  margin: 10px;
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fonts.l};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: bolder;
  }

  div {
    display: flex;
  }
`;
