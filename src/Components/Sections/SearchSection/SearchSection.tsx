import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleCitySearch } from "../../../store/actionCreators";
import SearchButton from "../../SearchButton/SearchButton";

const StyledSection = styled.section`
  width: 500px;
  height: 50px;

  .search {
    &__form {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
    }

    &__input {
      background: ${({ theme }) => theme.colors.white};
      width: 100%;
      color: ${({ theme }) => theme.colors.black};
      padding: 15px;
      font-size: ${({ theme }) => theme.fonts.m};
      border: 1px solid ${({ theme }) => theme.colors.grey};
      border-radius: 25px;
      border-right: none;
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      outline: none;

      :valid {
        border-color: ${({ theme }) => theme.colors.yellow};
        & + button {
          border-color: ${({ theme }) => theme.colors.yellow};
        }
      }

      :focus {
        border-color: ${({ theme }) => theme.colors.yellow};

        & + button {
          border-color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tabletSmall} {
    width: 80%;
  }
`;

interface SearchSectionProps {
  handleCitySearch: () => any;
  searchedCity: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  handleCitySearch,
  searchedCity,
}) => {
  return (
    <>
      <StyledSection className="search">
        <form className="search__form">
          <input
            className="search__input"
            required
            placeholder="Wpisz nazwę miasta..."
            value={searchedCity}
            onChange={handleCitySearch}
            type="text"
          />
          <SearchButton />
        </form>
      </StyledSection>
    </>
  );
};

const mapStateToProps = (state) => {
  return { searchedCity: state.searchedCity };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCitySearch: (e) => {
      dispatch(handleCitySearch(e));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
