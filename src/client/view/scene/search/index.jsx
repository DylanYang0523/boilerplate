import React from 'react';
import { connect } from 'react-redux';
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

import { 
  getSearchByUserStart,
  getSearchByHashtagStart,
  getSearchByHashtagSuccess,
  getSearchByHashtagEnd,
  updatePageOfSearchByHashtag,
} from 'Action/tweet';

import ResultTable from './component/ResultTable';
import Pagination from './component/Pagination';

class Search extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props;
    const params = new URLSearchParams(location.search);
    this.state = {
      currentTab: params.get('tab') || 'hashtag',
    }
  }
  componentDidMount() {
    const { currentTab } = this.state;
    if (currentTab === 'hashtag') {
      this.getHashtagData();
    }
  }
  getHashtagData() {
    const { getSearchByHashtagStart, getSearchByHashtagSuccess, getSearchByHashtagEnd } = this.props;
    getSearchByHashtagStart();
    fetch('https://am-twitter-scrape.herokuapp.com/hashtags/Python?pages_limit=3&wait=0')
      .then(res => res.json())
      .then(data => {
        getSearchByHashtagSuccess(data);
      })
      .catch(err => {})
      .finally(() => {
        getSearchByHashtagEnd();
      });
  }
  getUserData() {
    // call start action
  }
  render() {
    const { searchByHashtag, updatePageOfSearchByHashtag } = this.props;
    const { currentTab } = this.state;
    const page = searchByHashtag.page;
    const sliceBegin = 10 * (page - 1);
    const sliceEnd = 10 * page;
    const resultList = searchByHashtag.data.slice(sliceBegin, sliceEnd);
    return (
      <div>
        <TabContainer>
          <Link to={{ search: '?tab=hashtag' }} onClick={() => this.setState({ currentTab: 'hashtag' })}>
            <Tab active={currentTab === 'hashtag'}>
              Hashtag search
            </Tab>
          </Link>
          <Link to={{ search: '?tab=user' }} onClick={() => this.setState({ currentTab: 'user' })}>
            <Tab active={currentTab === 'user'}>
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
            <ResultTable data={resultList} />
            { 
              searchByHashtag.data.length > 10 ? 
              <Pagination 
                onClickPage={ updatePageOfSearchByHashtag }
                currentPage={ page }
                totalPage={ Math.ceil(searchByHashtag.data.length/10) }
              /> :
              <span />
            }
          </ResultTableContainer>
        </ResultContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchByHashtag: state.tweet.searchByHashtag,
  searchByUser: state.tweet.searchByUser,
});

const mapDispatchToProps = dispatch => ({
  getSearchByHashtagStart: () => dispatch(getSearchByHashtagStart()),
  getSearchByHashtagSuccess: data => dispatch(getSearchByHashtagSuccess(data)),
  getSearchByHashtagEnd: () => dispatch(getSearchByHashtagEnd()),
  updatePageOfSearchByHashtag: page => dispatch(updatePageOfSearchByHashtag(page)),
  getSearchByUserStart: () => dispatch(getSearchByUserStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);