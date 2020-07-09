import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);

  ${({ theme }) => theme.media.m1} {
    height: unset;
  }
`;
