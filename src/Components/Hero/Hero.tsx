import React from "react";
import styled from "styled-components";
import hero1 from "./../../media/hero1.svg";

const StyledSection = styled.section`
  margin-top: 60px;
  width: 400px;
  height: 400px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 15px;

  .hero {
    &__description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;

      h1 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 36px;
      }

      h2 {
        font-weight: lighter;
        margin: 15px 0 0 0;
      }
    }

    &__image {
      width: 100%;
      height: 200px;
      position: absolute;
      left: 0;
      bottom: 0;

      img {
        object-fit: scale-down;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledSection className="hero">
      <div className="hero__description">
        <header>
          <h1>Cześć!</h1>
        </header>
        <h2>
          Żeby zacząć zabawę z aplikacją, udostępnij swoją lokalizację. Kliknij
          w przycisk na dole!
        </h2>
      </div>
      <div className="hero__image">
        <img src={hero1} alt="" />
      </div>
    </StyledSection>
  );
};

export default Hero;
