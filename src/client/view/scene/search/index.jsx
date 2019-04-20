import React from 'react';
import { Link } from 'react-router-dom';
import {
  TabContainer,
  Tab,
  ResultContainer,
  ResultTitle,
  SearchInput,
  Input,
  SearchIcon,
  ResultTableContainer,
} from './SearchStyle';

class Search extends React.Component {
  render() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    return (
      <div>
        <TabContainer>
          <Link to={{ search: '?tab=hashtag' }}>
            <Tab active={tab === 'hashtag' ? true : false}>
              Hashtag search
            </Tab>
          </Link>
          <Link to={{ search: '?tab=user' }}>
            <Tab active={tab === 'user' ? true : false}>
              User search
            </Tab>
          </Link>
        </TabContainer>
        <ResultContainer>
          <ResultTitle>Hashtag search</ResultTitle>
          <SearchInput>
            <Input placeholder="Search by Hashtag" />
            <SearchIcon>
              <i className="material-icons">search</i>
            </SearchIcon>
          </SearchInput>
          <ResultTableContainer>result table container</ResultTableContainer>
        </ResultContainer>
      </div>
    );
  }
}

export default Search;