import React from "react";

import { Button } from "components/Button/Button";
import { StyledButtonGroup } from "./ButtonGroup.styled";

interface ButtonGroupInterface {
  handleClick: (e: any) => any;
  active: string;
  dateList: string[];
}

export const ButtonGroup: React.FC<ButtonGroupInterface> = ({
  handleClick,
  active,
  dateList,
}) => {
  return (
    <StyledButtonGroup>
      {console.log(active)}
      {dateList.map((date) => (
        <Button
          key={date}
          text={date}
          value={date}
          handleClick={(e) => handleClick(e.target.value)}
        />
      ))}
    </StyledButtonGroup>
  );
};
