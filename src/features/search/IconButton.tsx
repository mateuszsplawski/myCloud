import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingCircle } from "components/LoadingCircle/LoadingCircle";
import { StyledIconButton } from "./IconButton.styled";

interface IconButtonInterface {
  handleClick: () => any;
  fetchingData: boolean;
}

export const IconButton: React.FC<IconButtonInterface> = ({
  handleClick,
  fetchingData,
}) => {
  return (
    <StyledIconButton onClick={() => handleClick()} className="search__button">
      {fetchingData ? <LoadingCircle /> : <FontAwesomeIcon icon={faSearch} />}
    </StyledIconButton>
  );
};
