import React from "react";

import { StyledLoadingCircle } from "./LoadingCircle.styled";

export const LoadingCircle: React.FC = () => {
  return (
    <StyledLoadingCircle className="lds-ring loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoadingCircle>
  );
};
