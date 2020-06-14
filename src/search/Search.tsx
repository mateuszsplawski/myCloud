import React from "react";

import { StyledSearch } from "./Search.styled";
import { useFormik } from "formik";
import { constants } from "./constants";
import { Button } from "components/Button/Button";

interface SearchInterface {
  handleSubmit: () => any;
}

export const Search: React.FC<SearchInterface> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      inputValue: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <>
      <StyledSearch className="search">
        <form className="search__form" onSubmit={formik.handleSubmit}>
          <input
            className="search__input"
            required
            placeholder={constants.placeholder}
            value={formik.values.inputValue}
            onChange={formik.handleChange}
            type={constants.inputType}
          />
          <Button
            text={constants.buttonText}
            handleClick={formik.handleSubmit}
          />
        </form>
      </StyledSearch>
    </>
  );
};
