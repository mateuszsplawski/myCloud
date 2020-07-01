import styled from "styled-components";

export const StyledSearch = styled.section`
  width: 80%;
  height: 40px;
  max-width: 500px;

  .search {
    &__form {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
    }

    &__input {
      background: ${({ theme }) => theme.colors.white};
      width: 100%;
      color: ${({ theme }) => theme.colors.black};
      padding: 10px 20px;
      font-size: ${({ theme }) => theme.fonts.m};
      border: 1px solid ${({ theme }) => theme.colors.grey};
      border-radius: 20px;
      border-right: none;
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      outline: none;

      :valid {
        border-color: ${({ theme }) => theme.colors.yellow};
        & + button {
          border-color: ${({ theme }) => theme.colors.yellow};
        }
      }

      :focus {
        border-color: ${({ theme }) => theme.colors.yellow};

        & + button {
          border-color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tabletSmall} {
    width: 80%;
  }
`;
