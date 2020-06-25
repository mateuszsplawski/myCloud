import styled from "styled-components";

export const StyledFavourites = styled.section`
  position: absolute;
  top: 80px;
  left: 20px;
  height: 80%;
  width: 300px;
  overflow: hidden;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 0px 0px 15px -5px ${({ theme }) => theme.colors.black};
  border-radius: 25px;
  z-index: 2;
  overflow: scroll;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
