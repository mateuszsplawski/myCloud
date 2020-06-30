import styled from "styled-components";

export const StyledModal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 25px;
    width: 50vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    header {
      margin: 20px 0;
      border-radius: 25px;
      background: ${({ theme }) => theme.colors.warning};
      padding: 10px 20px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primaryLight};
      font-weight: bolder;
      font-size: ${({ theme }) => theme.fonts.m};
    }

    p {
      font-size: ${({ theme }) => theme.fonts.l};
    }
  }
`;
