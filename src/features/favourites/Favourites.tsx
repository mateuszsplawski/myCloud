import React from "react";
import { connect } from "react-redux";

import { StyledFavourites } from "./Favourites.styled";
import { FavouriteCard } from "./FavouriteCard";

interface FavouritesInterface {
  favouriteWeatherDataArray: {}[];
}

const Favourites: React.FC<FavouritesInterface> = ({
  favouriteWeatherDataArray,
}) => {
  return (
    <StyledFavourites>
      <ul>
        {favouriteWeatherDataArray.map((favouriteWeatherDataItem) => (
          <FavouriteCard weatherData={favouriteWeatherDataItem[0]} />
        ))}
      </ul>
    </StyledFavourites>
  );
};

const mapStateToProps = (state) => ({
  favouriteWeatherDataArray: state.home.weatherDataArray.filter(
    (weatherData) => weatherData.favourite
  ),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
