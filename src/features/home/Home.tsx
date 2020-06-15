import React from "react";

import HeroIcon from "assets/HeroIcon";
import { StyledHome } from "./Home.styled";
import { constants } from "./constants";
import { Button } from "components/Button/Button";

export const Home: React.FC = () => {
  return (
    <StyledHome className="hero">
      <div className="hero__description">
        <h2>
          {constants.description}
          <br />
          {constants.description2}
        </h2>
      </div>
      <div className="hero__image">
        <HeroIcon />
      </div>
      <Button handleClick={() => undefined} text={constants.buttonText} />
    </StyledHome>
  );
};
