import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import { StyledSearch } from "./Search.styled";
import { constants } from "./constants";
import { fetchData } from "./../home/duck/homeDuck";
import { setErrorStatus } from "./../modal/duck/modalDuck";
import { IconButton } from "./IconButton";

interface SearchInterface {
  fetchData: (searchedCity: string) => any;
  fetchingData: boolean;
  weatherDataArray: {}[];
  setErrorStatus: ({ status: boolean, message: string }) => void;
}

export const Search: React.FC<SearchInterface> = ({
  fetchData,
  fetchingData,
  weatherDataArray,
  setErrorStatus,
}) => {
  const cityArray = weatherDataArray.map((weatherData: { name: string }) =>
    weatherData.name.toLowerCase()
  );
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: ({ city }, { resetForm }) => {
      if (cityArray.includes(city.toLowerCase())) {
        setErrorStatus({
          status: true,
          message: "Szukane miasto jest już na liście.",
        });
        resetForm();
      } else if (city === "") {
        setErrorStatus({
          status: true,
          message: "Musisz wpisać nazwę szukanego miasta.",
        });
      } else {
        fetchData(city);
        resetForm();
      }
    },
  });
  return (
    <>
      <StyledSearch className="search">
        <form className="search__form" onSubmit={formik.handleSubmit}>
          <input
            name={constants.inputName}
            className="search__input"
            required
            placeholder={constants.placeholder}
            value={formik.values.city}
            onChange={formik.handleChange}
            type={constants.inputType}
          />
          <IconButton
            fetchingData={fetchingData}
            handleClick={formik.handleSubmit}
          />
        </form>
      </StyledSearch>
    </>
  );
};

const mapStateToProps = (state) => ({
  fetchingData: state.search.fetchingData,
  weatherDataArray: state.home.weatherDataArray,
});

const mapDispatchToProps = {
  fetchData,
  setErrorStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
