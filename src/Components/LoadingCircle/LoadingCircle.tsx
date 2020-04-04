import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 50px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    border: 4px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 50%;
    animation: lds-ring 0.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.yellow} transparent transparent
      transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingCircle: React.FC = () => {
  return (
    <StyledWrapper className="lds-ring loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledWrapper>
  );
};

export default LoadingCircle;
