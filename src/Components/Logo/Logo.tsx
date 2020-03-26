import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.header`
  h1 {
    font-family: "Exo", sans-serif;
    color: rgb(245, 245, 245);
    text-shadow: 0 0 1px rgb(245, 245, 245);
    font-size: 35px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 16px;
      position: relative;
      top: 6px;
    }
  }
`;

const Logo: React.SFC<Object> = () => {
  return (
    <StyledWrapper>
      <h1>
        <span>my</span>Cloud
      </h1>
    </StyledWrapper>
  );
};

export default Logo;
