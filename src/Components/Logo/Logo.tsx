import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.header`
  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.darkWhite};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.darkWhite};
    font-size: 60px;
    display: flex;
    flex-direction: column;
    position: relative;
    span {
      font-size: 26px;
      position: absolute;
      top: -15px;
      left: -15px;
      transform: rotate(-15deg);
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
