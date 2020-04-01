import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleCitySearch } from "../../../store/actionCreators";
import SearchButton from "../../SearchButton/SearchButton";

const StyledSection = styled.form`
  display: flex;
  width: 500px;
  height: 50px;
  position: relative;

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

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 340px) {
    input {
      font-size: 14px;
    }
  }
`;

interface SearchSectionProps {
  handleCitySearch: any;
  searchedCity: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  handleCitySearch,
  searchedCity
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
        <SearchButton />
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
