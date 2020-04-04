import React from "react";
import styled from "styled-components";
import HeroIcon from "../../../media/HeroIcon";
import HeroButton from "./../../HeroButton/HeroButton";

const StyledSection = styled.section`
  margin-top: 30px;
  width: 350px;
  height: 420px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0px 5px 40px 10px ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  .hero {
    &__description {
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      h2 {
        font-size: ${({ theme }) => theme.fonts.l};
        font-weight: lighter;
        margin: 15px 0 0 0;
      }
    }

    &__image {
      width: 100%;
      height: 300px;
      right: 68px;
      bottom: -3px;
      position: absolute;
      z-index: 1;
      svg {
        object-fit: scale-down;
        width: 100%;
        height: 100%;
      }
    }
  }

  ${({ theme }) => theme.media.mobileLarge} {
    width: 250px;
    height: 340px;

    .hero {
      &__description {
        padding: 0 10px;

        h2 {
          font-size: ${({ theme }) => theme.fonts.m};
        }
      }

      &__image {
        right: 55px;
        bottom: -38px;
      }
    }
  }
`;

const HeroSection: React.FC = () => {
  return (
    <StyledSection className="hero">
      <div className="hero__description">
        <h2>
          Żeby skorzystać z aplikacji, udostępnij swoją lokalizację.
          <br />
          Kliknij w przycisk na dole!
        </h2>
      </div>
      <div className="hero__image">
        <HeroIcon />
      </div>
      <HeroButton />
    </StyledSection>
  );
};

export default HeroSection;
