import styled from "styled-components";

export const StyledButtonGroup = styled.div`
  display: flex;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.secondary};

  button {
    border: none;
    :hover {
      border: none;
    }
  }
`;
