import styled from "styled-components";

export const StyledHome = styled.section`
  width: 350px;
  height: 550px;
  position: relative;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 25px;
  box-shadow: 0px 0px 15px -5px ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  overflow: hidden;

  .hero {
    &__description {
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      h1 {
        font-size: ${({ theme }) => theme.fonts.xl};
        font-weight: bolder;
        margin: 15px 0 0 0;
      }
    }

    &__actions {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 90px;
    }

    &__image {
      width: 100%;
      bottom: -20px;
      left: 0;
      position: absolute;
      z-index: 1;
      svg {
        object-fit: scale-down;
        width: 100%;
        height: 100%;
      }
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.m4} {
    width: 95%;
  }
`;
