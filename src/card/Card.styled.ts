import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  border-radius: 25px;
  padding: 40px;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.media.tabletSmall} {
    flex-wrap: nowrap;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.mobileLarge} {
    padding: 20px;
  }
`;
