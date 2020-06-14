import styled from "styled-components";

export const StyledSlider = styled.div<{ isSliderInitialized: boolean }>`
  margin: 25px;

  .swiper-wrapper {
    padding: 25px 0;
    width: 1000px;
    height: 360px;
  }

  .swiper-button-prev {
    left: calc(50% - 200px);
    right: unset;

    ::after {
      padding: 0 0 0 6px;
    }
  }

  .swiper-button-next {
    right: calc(50% - 200px);
    left: unset;

    ::after {
      padding: 0 6px 0 0;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: ${({ isSliderInitialized }) =>
      isSliderInitialized ? "flex" : "none"};
    transform: translateY(50%);
    overflow: hidden;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    bottom: 25px;
    top: unset;
    background: ${({ theme }) => theme.colors.yellow};
    border: 3px solid ${({ theme }) => theme.colors.yellow};

    ::after {
      color: ${({ theme }) => theme.colors.darkWhite};
    }
  }

  ${({ theme }) => theme.media.laptop} {
    .swiper-wrapper {
      width: 800px;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    .swiper-wrapper {
      width: 600px;
      height: 100%;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }

  ${({ theme }) => theme.media.tabletSmall} {
    .swiper-wrapper {
      width: 400px;
    }
  }

  ${({ theme }) => theme.media.mobileLarge} {
    .swiper-wrapper {
      width: 330px;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    .swiper-wrapper {
      width: 300px;
    }
  }
`;
