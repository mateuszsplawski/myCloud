import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const StyledSection = styled.form`
  display: flex;
  width: 500px;

  input {
    background: #fff;
    width: 100%;
    color: black;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #777;
    border-radius: 25px;
    border-right: none;
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    outline: none;

    :valid {
      border-color: rgb(148, 193, 220);
      box-shadow: -5px 1px 30px -10px rgb(148, 193, 220);
      & + button {
        border-color: rgb(148, 193, 220);
        box-shadow: 15px 1px 30px -10px rgb(148, 193, 220);
      }
    }

    :focus {
      border-color: rgb(148, 193, 220);
      box-shadow: -5px 1px 30px -10px rgb(148, 193, 220);

      & + button {
        border-color: rgb(148, 193, 220);
        box-shadow: 15px 1px 30px -10px rgb(148, 193, 220);
      }
    }
  }

  button {
    background: white;
    border: 1px solid #777;
    color: black;
    border-left: none;
    border-radius: 25px;
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    padding: 5px 20px;
    font-size: 20px;
    cursor: pointer;
    outline: none;

    :hover {
      color: rgb(148, 193, 220);
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 340px) {
    input,
    button {
      font-size: 14px;
    }
  }
`;

interface props {
  handleCitySearch: Function;
  searchedCity: String;
  handleSearchClick: Function;
}

const SearchSection = ({
  handleCitySearch,
  searchedCity,
  handleSearchClick
}) => {
  return (
    <>
      <StyledSection>
        <input
          required
          placeholder="Wpisz nazwę miasta..."
          value={searchedCity}
          onChange={handleCitySearch}
          type="text"
        />
        <button onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </StyledSection>
    </>
  );
};

const mapStateToProps = state => {
  return { searchedCity: state.searchedCity };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCitySearch: e => {
      const action = { type: "INPUT_CHANGE", value: e.target.value };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
