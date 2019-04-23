import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  TabContainer,
  Tab,
  ResultContainer,
  ResultTitle,
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
import SearchInput from './component/SearchInput';

class Search extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props;
    const params = new URLSearchParams(location.search);
    this.state = {
      currentTab: params.get('tab') || 'hashtag',
    }
  }
  getTweetData(keyword) {
    const { currentTab } = this.state;
    let canCallApi, callApiStartAction, callApiSuccessAction, callApiEndAction;
    switch (currentTab) {
      case 'hashtag':
        callApiStartAction = this.props.getSearchByHashtagStart;
        callApiSuccessAction = this.props.getSearchByHashtagSuccess;
        callApiEndAction = this.props.getSearchByHashtagEnd;
        break;
      case 'user':
        callApiStartAction = this.props.getSearchByUserStart;
        callApiSuccessAction = this.props.getSearchByUserSuccess;
        callApiEndAction = this.props.getSearchByUserEnd;
      default:
        break;
    }
    const apiUrl = `https://am-twitter-scrape.herokuapp.com/${currentTab}s/${keyword}?pages_limit=3&wait=0`;
    callApiStartAction();
    fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        callApiSuccessAction(data);
      })
      .catch(err => {})
      .finally(() => {
        callApiEndAction();
      });
  }
  setCurrentValue() {
    const { currentTab } = this.state;
    switch (currentTab) {
      case 'hashtag':
        return { 
          currentPage: this.props.searchByHashtag.page,
          currentData: this.props.searchByHashtag.data,
          currentDataIsFetching: this.props.searchByHashtag.isFetching,
          currentPageClickAction: this.props.updatePageOfSearchByHashtag,
        };
      case 'user':
        return { 
          currentPage: this.props.searchByUser.page,
          currentData: this.props.searchByUser.data,
          currentDataIsFetching: this.props.searchByUser.isFetching,
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
    const { 
      currentPage,
      currentData, 
      currentDataIsFetching, 
      currentPageClickAction,
    } = this.setCurrentValue();
    const sliceBegin = 10 * (currentPage - 1);
    const sliceEnd = 10 * currentPage;
    const resultList = currentData.slice(sliceBegin, sliceEnd);
    return (
      <div>
        <TabContainer>
          <Link 
            to={{ pathname: '/search', search: '?tab=hashtag' }} 
            onClick={() => this.onClickTab('hashtag')}
          >
            <Tab active={currentTab === 'hashtag'}>
              Hashtag search
            </Tab>
          </Link>
          <Link 
            to={{ pathname: '/search', search: '?tab=user' }} 
            onClick={() => this.onClickTab('user')}
          >
            <Tab active={currentTab === 'user'}>
              User search
            </Tab>
          </Link>
        </TabContainer>
        <ResultContainer>
          <ResultTitle>{ `${this.setFirstCharToUppercase(currentTab)} search`}</ResultTitle>
          <SearchInput 
            onClickSearchIcon={(keyword) => this.getTweetData(keyword)} 
            searchType={this.setFirstCharToUppercase(currentTab)}
            isFetching={currentDataIsFetching}
          />
          <ResultTableContainer>
            <ResultTable data={resultList} isFetching={currentDataIsFetching}/>
            { 
              !currentDataIsFetching && currentData.length > 10 ? 
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