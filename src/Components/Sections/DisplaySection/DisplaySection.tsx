import React from "react";
import styled from "styled-components";
import Slider from "../../Slider/Slider";
import SearchSection from "../SearchSection/SearchSection";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DisplaySection: React.FC = () => {
  return (
    <>
      <StyledSection className="display">
        <SearchSection />
        <Slider />
      </StyledSection>
    </>
  );
};

export default DisplaySection;
