import styled from "styled-components";

export const StyledActionBar = styled.nav`
  width: 100%;
  height: 30px;
  border-radius: 0 25px 0 0;
  background: ${({ theme }) => theme.colors.primaryDark};
`;
