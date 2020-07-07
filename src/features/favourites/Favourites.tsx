import React from "react";
import { connect } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { StyledFavourites } from "./Favourites.styled";
import { FavouriteCard } from "./FavouriteCard";
import { Button } from "components/Button/Button";
import { setFavouriteVisibility } from "./../navigation/duck/navigationDuck";

interface FavouritesInterface {
  favouriteWeatherDataArray: {}[];
  setFavouriteVisibility: any;
}

const Favourites: React.FC<FavouritesInterface> = ({
  favouriteWeatherDataArray,
  setFavouriteVisibility,
}) => {
  return (
    <StyledFavourites>
      <ul>
        {favouriteWeatherDataArray.map((favouriteWeatherDataItem) => (
          <FavouriteCard weatherData={favouriteWeatherDataItem[0]} />
        ))}
      </ul>
      <Button
        icon={faTimes}
        warning
        handleClick={() => setFavouriteVisibility()}
      />
    </StyledFavourites>
  );
};

const mapStateToProps = (state) => ({
  favouriteWeatherDataArray: state.home.weatherDataArray.filter(
    (weatherData) => weatherData.favourite
  ),
});

const mapDispatchToProps = { setFavouriteVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
