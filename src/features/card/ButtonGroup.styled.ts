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

  ${({ theme }) => theme.media.m2} {
    width: 100%;
    border-radius: unset;
    overflow: scroll;
  }
`;
