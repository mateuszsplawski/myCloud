import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  handleCitySearch,
  callAPI,
  cleanInput
} from "../../../store/actionCreators";
import AirPollutionInfo from "../../AirPollutionInfo/AirPollutionInfo";

const StyledSection = styled.form`
  display: flex;
  width: 500px;

  input {
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    padding: 15px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 25px;
    border-right: none;
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    outline: none;

    :valid {
      border-color: ${({ theme }) => theme.colors.blue};
      box-shadow: -5px 1px 30px -10px ${({ theme }) => theme.colors.blue};
      & + button {
        border-color: ${({ theme }) => theme.colors.blue};
        box-shadow: 15px 1px 30px -10px ${({ theme }) => theme.colors.blue};
      }
    }

    :focus {
      border-color: ${({ theme }) => theme.colors.blue};
      box-shadow: -5px 1px 30px -10px ${({ theme }) => theme.colors.blue};

      & + button {
        border-color: ${({ theme }) => theme.colors.blue};
        box-shadow: 15px 1px 30px -10px ${({ theme }) => theme.colors.blue};
      }
    }
  }

  button {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
    border-left: none;
    border-radius: 25px;
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    padding: 5px 20px;
    font-size: 20px;
    cursor: pointer;
    outline: none;

    :hover {
      color: ${({ theme }) => theme.colors.blue};
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

interface SearchSectionProps {
  handleCitySearch: any;
  searchedCity: string;
  handleAPICall: any;
  clearInput: any;
}

const SearchSection: React.SFC<SearchSectionProps> = ({
  handleCitySearch,
  searchedCity,
  handleAPICall,
  clearInput
}) => {
  const handleSearchClick = e => {
    e.preventDefault();
    handleAPICall(searchedCity);
    clearInput();
  };
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
      dispatch(handleCitySearch(e));
    },
    handleAPICall: searchedCity => {
      dispatch(callAPI(searchedCity));
    },
    clearInput: () => dispatch(cleanInput())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
