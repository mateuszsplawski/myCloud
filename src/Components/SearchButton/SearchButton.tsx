import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import {
  callAPI,
  cleanInput,
  updateSearchedCityList
} from "../../store/actionCreators";
import { connect } from "react-redux";

const StyledWrapper = styled.button`
  width: 60px;
  position: relative;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  border-left: none;
  border-radius: 25px;
  border-top-left-radius: unset;
  border-bottom-left-radius: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  outline: none;

  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 340px) {
    font-size: 14px;
  }
`;

export interface SearchButtonProps {
  searchedCity: string;
  handleAPICall: Function;
  clearInput: Function;
  fetchingData: Boolean;
  updateSearchedCityList: Function;
  searchedCityList: Array<String>;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  handleAPICall,
  clearInput,
  fetchingData,
  updateSearchedCityList,
  searchedCity,
  searchedCityList
}) => {
  const handleSearchClick = e => {
    e.preventDefault();
    if (searchedCityList.includes(searchedCity)) {
      alert("Już wyszukałeś pogodę dla Tego miasta.");
      clearInput();
    } else {
      handleAPICall(searchedCity);
      updateSearchedCityList(searchedCity);
      clearInput();
    }
  };
  return (
    <StyledWrapper onClick={handleSearchClick}>
      {fetchingData ? <LoadingCircle /> : <FontAwesomeIcon icon={faSearch} />}
    </StyledWrapper>
  );
};

const mapStateToProps = state => {
  return {
    searchedCity: state.searchedCity,
    fetchingData: state.fetchingData,
    searchedCityList: state.searchedCityList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAPICall: searchedCity => {
      searchedCity !== ""
        ? dispatch(callAPI(searchedCity))
        : alert("Musisz wpisać nazwę miasta!");
    },
    clearInput: () => dispatch(cleanInput()),
    updateSearchedCityList: searchedCity =>
      dispatch(updateSearchedCityList(searchedCity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
