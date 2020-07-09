import React from "react";
import { connect } from "react-redux";
import {
  faSun,
  faMoon,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

import { StyledNavigation } from "./Navigation.styled";
import { setDarkMode, setFavouriteVisibility } from "./duck/navigationDuck";
import { Button } from "components/Button/Button";
import Search from "features/search/Search";
import { useWindowSize } from "./helpers";

// ACTION TYPING

interface NavigationInterface {
  setDarkMode: any;
  darkMode: boolean;
  setFavouriteVisibility: any;
  favouriteVisible: boolean;
  favouriteArrayLength: number;
}

const Navigation: React.FC<NavigationInterface> = ({
  setDarkMode,
  darkMode,
  setFavouriteVisibility,
  favouriteVisible,
  favouriteArrayLength,
}) => {
  const size = useWindowSize();
  return (
    <StyledNavigation className={"navigation"}>
      <Button
        text={size.width > 1000 && "Motyw"}
        name={"navigation__switch"}
        handleClick={() => setDarkMode()}
        active={darkMode}
        icon={darkMode ? faMoon : faSun}
      />
      <Search />
      <Button
        text={size.width > 1000 && "Ulubione"}
        icon={faClipboardList}
        handleClick={() => setFavouriteVisibility()}
        active={favouriteVisible}
        badge={favouriteArrayLength}
      />
    </StyledNavigation>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.navigation.darkMode,
  favouriteVisible: state.navigation.favouriteVisible,
  favouriteArrayLength: state.home.weatherDataArray.filter(
    (weatherDataItem) => weatherDataItem.favourite === true
  ).length,
});

const mapDispatchToProps = { setDarkMode, setFavouriteVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
