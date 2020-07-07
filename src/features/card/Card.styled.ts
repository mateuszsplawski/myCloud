import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background: linear-gradient(to right, #e0eafc, #cfdef3);
  border-radius: 25px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .weather__main {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.m1} {
    flex-direction: column;
  }
`;
