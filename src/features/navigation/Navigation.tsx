import React from "react";
import { connect } from "react-redux";

import { StyledNavigation } from "./Navigation.styled";
import { SwitchButton } from "./SwitchButton";
import { setDarkMode, setFavouriteVisibility } from "./duck/navigationDuck";
import { Button } from "components/Button/Button";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// ACTION TYPING

interface NavigationInterface {
  setDarkMode: any;
  darkMode: boolean;
  setFavouriteVisibility: any;
}

const Navigation: React.FC<NavigationInterface> = ({
  setDarkMode,
  darkMode,
  setFavouriteVisibility,
}) => {
  return (
    <StyledNavigation>
      <Button
        text={"Ulubione"}
        icon={faStar}
        handleClick={setFavouriteVisibility}
      />
      <SwitchButton handleClick={setDarkMode} active={darkMode} />
    </StyledNavigation>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.navigation.darkMode,
});

const mapDispatchToProps = { setDarkMode, setFavouriteVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
