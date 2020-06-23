import styled from "styled-components";

export const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80vw;
  height: 80vh;
  background: ${({ theme }) => theme.colors.darkWhite};
  border-radius: 20px;
  z-index: 1;
`;
