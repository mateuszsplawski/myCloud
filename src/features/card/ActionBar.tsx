import React from "react";
import { faStar, faBackspace } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { StyledActionBar } from "./ActionBar.styled";
import { Button } from "components/Button/Button";
import { setFavourite, removeItem } from "features/home/duck/homeDuck";

interface ActionBarInterface {
  name: string;
  setFavourite: (name: string) => void;
  removeItem: (name: string) => void;
  weatherDataArray: { name: string; favourite: boolean }[];
}

const ActionBar: React.FC<ActionBarInterface> = ({
  name,
  setFavourite,
  removeItem,
  weatherDataArray,
}) => {
  const isFavourite = weatherDataArray.find(
    (weatherDataItem) => weatherDataItem.name === name
  ).favourite;
  return (
    <StyledActionBar>
      <Button
        handleClick={() => setFavourite(name)}
        text={isFavourite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        active={isFavourite}
        icon={faStar}
      />
      {/* <Button
        handleClick={() => removeItem(name)}
        text={"Usuń z listy"}
        warning
        icon={faBackspace}
      /> */}
    </StyledActionBar>
  );
};

const mapStateToProps = (state) => ({
  weatherDataArray: state.home.weatherDataArray,
});

const mapDispatchToProps = {
  setFavourite,
  removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
