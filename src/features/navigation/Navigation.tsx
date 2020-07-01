import React from "react";
import { connect } from "react-redux";

import { StyledNavigation } from "./Navigation.styled";
import { setDarkMode, setFavouriteVisibility } from "./duck/navigationDuck";
import { Button } from "components/Button/Button";
import { faStar, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Search from "features/search/Search";

// ACTION TYPING

interface NavigationInterface {
  setDarkMode: any;
  darkMode: boolean;
  setFavouriteVisibility: any;
  favouriteVisible: boolean;
}

const Navigation: React.FC<NavigationInterface> = ({
  setDarkMode,
  darkMode,
  setFavouriteVisibility,
  favouriteVisible,
}) => {
  return (
    <StyledNavigation className={"navigation"}>
      <Button
        text={"Ulubione"}
        icon={faStar}
        handleClick={setFavouriteVisibility}
        active={favouriteVisible}
      />
      <Search />
      <Button
        text={"Motyw"}
        name={"navigation__switch"}
        handleClick={setDarkMode}
        active={darkMode}
        icon={darkMode ? faMoon : faSun}
      />
    </StyledNavigation>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.navigation.darkMode,
  favouriteVisible: state.navigation.favouriteVisible,
});

const mapDispatchToProps = { setDarkMode, setFavouriteVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
