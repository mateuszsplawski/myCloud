import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingCircle from "components/LoadingCircle/LoadingCircle";
import { StyledIconButton } from "./IconButton.styled";

interface IconButtonInterface {
  handleClick: () => any;
}

export const IconButton: React.FC<IconButtonInterface> = ({ handleClick }) => {
  return (
    <StyledIconButton onClick={() => handleClick()} className="search__button">
      {false ? <LoadingCircle /> : <FontAwesomeIcon icon={faSearch} />}
    </StyledIconButton>
  );
};
