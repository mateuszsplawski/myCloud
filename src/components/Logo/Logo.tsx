import React from "react";

import { StyledLogo } from "./Logo.styled";

export const Logo: React.FC = () => {
  return (
    <StyledLogo className="logo">
      <h1>
        <span>my</span>Cloud
      </h1>
    </StyledLogo>
  );
};
