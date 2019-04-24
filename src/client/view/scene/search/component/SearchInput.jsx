import React from 'react';

import {
  SearchInputWrapper,
  Input,
  SearchIcon,
} from './SearchInputStyle';

/**
 * SearchInput component for user to type the keyword.
 */
class SearchInput extends React.Component {
  /**
   * Trigger the search function which was passed in by the props.
   */
  onSearch() {
    const { onClickSearchIcon, isFetching } = this.props;
    if (isFetching) return;
    const inputValue = this.searchInput.value;
    this.searchInput.value = '';
    onClickSearchIcon(inputValue);
  }

  /**
   * Bind the key 'enter' to trigger search method.
   * @param {object} event
   */
  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.onSearch();
    }
  }

  /**
   * render
   * @return {ReactElement} - Markup.
   */
  render() {
    const { searchType } = this.props;
    return (
      <SearchInputWrapper>
        <Input 
          placeholder={`Search by ${searchType}`} 
          ref={ ref => this.searchInput = ref }
          onKeyPress={(e) => this.handleKeyPress(e)}
        />
        <SearchIcon onClick={() => this.onSearch()}>
          <i className="material-icons">search</i>
        </SearchIcon>
      </SearchInputWrapper>
    );
  }
}

export default SearchInput;