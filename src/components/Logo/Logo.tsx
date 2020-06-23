import React from "react";

import { StyledLogo } from "./Logo.styled";
import WeatherIcon from "assets/WeatherIcon";

export const Logo: React.FC = () => {
  return (
    <StyledLogo className="logo">
      <h1>
        <span>my</span>Cloud
        <WeatherIcon id={"03d"} />
      </h1>
    </StyledLogo>
  );
};
