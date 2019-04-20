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
  PaginationContainer,
  PageBtn,
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
          <ResultTableContainer>
            <table>
              <thead>
                <tr>
                  <th>Tweet</th>
                  <th>Likes</th>
                  <th>Replies</th>
                  <th>Retweets</th>
                  <th>Hashtag</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11</td>
                  <td>22</td>
                  <td>33</td>
                  <td>44</td>
                  <td>55</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>22</td>
                  <td>33</td>
                  <td>44</td>
                  <td>55</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>22</td>
                  <td>33</td>
                  <td>44</td>
                  <td>55</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>22</td>
                  <td>33</td>
                  <td>44</td>
                  <td>55</td>
                  <td>66</td>
                </tr>
              </tbody>
            </table>
            <PaginationContainer>
              <PageBtn active>1</PageBtn>
              <PageBtn>2</PageBtn>
              <PageBtn>></PageBtn>
            </PaginationContainer>
          </ResultTableContainer>
        </ResultContainer>
      </div>
    );
  }
}

export default Search;