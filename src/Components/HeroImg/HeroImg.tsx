import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 60px;
  div {
    position: relative;

    h1 {
      width: 100%;
      position: absolute;
      text-align: center;
      bottom: 10%;
      color: #fff;
      text-shadow: 2px 2px black;
    }
  }

  @media (max-width: 550px) {
    div {
      width: 100vw;
      padding: 15px;
      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }
    }

    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 340px) {
    h1 {
      font-size: 12px;
    }
  }
`;

const HeroImg = () => {
  return (
    <StyledSection>
      <div>
        <h1>
          You know nothing about weather?
          <br />
          Type in your city and enjoy!
        </h1>
        <img
          src="https://media.giphy.com/media/Qmmpdnp8SicWQ/giphy.gif"
          alt=""
        />
      </div>
    </StyledSection>
  );
};

export default HeroImg;
