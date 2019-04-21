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
  getSearchByHashtagStart,
  getSearchByHashtagSuccess,
  getSearchByHashtagEnd,
  updatePageOfSearchByHashtag,
  getSearchByUserStart,
  getSearchByUserSuccess,
  getSearchByUserEnd,
  updatePageOfSearchByUser,
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
    if (currentTab === 'user') {
      this.getUserData();
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
    const { getSearchByUserStart, getSearchByUserSuccess, getSearchByUserEnd } = this.props;
    getSearchByUserStart();
    fetch('https://am-twitter-scrape.herokuapp.com/users/Twitter?pages_limit=3&wait=0')
      .then(res => res.json())
      .then(data => {
        getSearchByUserSuccess(data);
      })
      .catch(err => {})
      .finally(() => {
        getSearchByUserEnd();
      });
  }
  setCurrentValue() {
    const { currentTab } = this.state;
    switch (currentTab) {
      case 'hashtag':
        return { 
          currentPage: this.props.searchByHashtag.page,
          currentData: this.props.searchByHashtag.data,
          currentPageClickAction: this.props.updatePageOfSearchByHashtag,
        };
      case 'user':
        return { 
          currentPage: this.props.searchByUser.page,
          currentData: this.props.searchByUser.data,
          currentPageClickAction: this.props.updatePageOfSearchByUser,
        };
      default:
        return {};
    }
  }
  onClickTab(tabName) {
    this.setState({ currentTab: tabName });
  }
  setFirstCharToUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    const { currentTab } = this.state;
    const { currentPage, currentData, currentPageClickAction } = this.setCurrentValue();
    const sliceBegin = 10 * (currentPage - 1);
    const sliceEnd = 10 * currentPage;
    const resultList = currentData.slice(sliceBegin, sliceEnd);
    return (
      <div>
        <TabContainer>
          <Link 
            to={{ search: '?tab=hashtag' }} 
            onClick={() => this.onClickTab('hashtag')}
          >
            <Tab active={currentTab === 'hashtag'}>
              Hashtag search
            </Tab>
          </Link>
          <Link 
            to={{ search: '?tab=user' }} 
            onClick={() => this.onClickTab('user')}
          >
            <Tab active={currentTab === 'user'}>
              User search
            </Tab>
          </Link>
        </TabContainer>
        <ResultContainer>
          <ResultTitle>{ `${this.setFirstCharToUppercase(currentTab)} search`}</ResultTitle>
          <SearchInput>
            <Input placeholder={`Search by ${this.setFirstCharToUppercase(currentTab)}`} />
            <SearchIcon>
              <i className="material-icons">search</i>
            </SearchIcon>
          </SearchInput>
          <ResultTableContainer>
            <ResultTable data={resultList} />
            { 
              currentData.length > 10 ? 
              <Pagination 
                onClickPage={ currentPageClickAction }
                currentPage={ currentPage }
                totalPage={ Math.ceil(currentData.length/10) }
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
  getSearchByUserSuccess: data => dispatch(getSearchByUserSuccess(data)),
  getSearchByUserEnd: () => dispatch(getSearchByUserEnd()),
  updatePageOfSearchByUser: page => dispatch(updatePageOfSearchByUser(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);