import styled from "styled-components";

export const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
`;
