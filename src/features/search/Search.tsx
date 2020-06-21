import React from "react";

import { StyledSearch } from "./Search.styled";
import { useFormik } from "formik";
import { constants } from "./constants";
import { fetchData } from "./../home/duck/homeDuck";
import { connect } from "react-redux";
import { IconButton } from "./IconButton";

interface SearchInterface {
  fetchData: (searchedCity: string) => any;
}

export const Search: React.FC<SearchInterface> = ({ fetchData }) => {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: ({ city }, { resetForm }) => {
      fetchData(city);
      resetForm();
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
          <IconButton handleClick={formik.handleSubmit} />
        </form>
      </StyledSearch>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);