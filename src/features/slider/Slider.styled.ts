import styled from "styled-components";

export const StyledSlider = styled.div<{ isSliderMounted: boolean }>`
  margin: 50px;
  cursor: ${({ isSliderMounted }) => isSliderMounted && "grab"};

  .swiper-wrapper {
    margin: 25px 0 0 0;
    padding: 25px 0;
    width: 85vw;
    height: 85vh;
  }

  .swiper-button-prev {
    left: -22px;
    right: unset;

    svg {
      margin: 0 0 0 20px;
    }
  }

  .swiper-button-next {
    right: -22px;
    left: unset;

    svg {
      margin: 0 20px 0 0;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: ${({ isSliderMounted }) =>
      isSliderMounted ? "relative" : "none"};
    transform: translateY(50%);
    overflow: hidden;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    bottom: 50%;
    top: unset;
    background: ${({ theme }) => theme.colors.primaryLight};
    border: 3px solid ${({ theme }) => theme.colors.primaryLight};
    transition: 0.2s;

    ::after {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.colors.black};
      font-size: 22px;
      transition: 0.1s;
    }

    :hover {
      width: 52px;
      height: 52px;

      &.swiper-button-prev {
        left: -2px;
        justify-content: center;

        svg {
          margin: 0;
        }
      }

      &.swiper-button-next {
        right: -2px;
        justify-content: center;

        svg {
          margin: 0;
        }
      }
    }
  }

  ${({ theme }) => theme.media.m1} {
    .swiper-wrapper {
      height: 100%;
    }
  }
`;
