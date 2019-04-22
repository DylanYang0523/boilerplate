import React from 'react';

import {
  SearchInputWrapper,
  Input,
  SearchIcon,
} from '../SearchStyle';

class SearchInput extends React.Component {
  onSearch() {
    const { onClickSearchIcon, isFetching } = this.props;
    if (isFetching) return;
    const inputValue = this.searchInput.value;
    this.searchInput.value = '';
    onClickSearchIcon(inputValue);
  }
  render() {
    const { searchType } = this.props;
    return (
      <SearchInputWrapper>
        <Input 
          placeholder={`Search by ${searchType}`} 
          ref={ ref => this.searchInput = ref }
        />
        <SearchIcon onClick={() => this.onSearch()}>
          <i className="material-icons">search</i>
        </SearchIcon>
      </SearchInputWrapper>
    );
  }
}

export default SearchInput;