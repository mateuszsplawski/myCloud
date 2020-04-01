import React from "react";
import styled from "styled-components";
import Slider from "../../Slider/Slider";

const StyledSection = styled.section`
  display: flex;
  padding: 5vh 5vw;
  justify-content: center;
  height: 100%;
  align-items: center;
  max-width: 1000px;

  ${({ theme }) => theme.media.tablet} {
    max-width: 350px;
    width: 100%;
    padding: unset;
  }
`;

const DisplaySection = () => {
  return (
    <StyledSection>
      <Slider />
    </StyledSection>
  );
};

export default DisplaySection;
