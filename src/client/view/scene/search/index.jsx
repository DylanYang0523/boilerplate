import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import {
  TabContainer,
  Tab,
  ResultContainer,
  ResultTitle,
  ErrorHint,
  ResultTableContainer,
} from './SearchStyle';

// actions
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

// components
import SearchInput from './component/SearchInput';
import ResultTable from './component/ResultTable';
import Pagination from './component/Pagination';

/**
 * Search component for /search page.
 */
class Search extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    const { location } = props;
    const params = new URLSearchParams(location.search);

    /**
     * @type {object}
     * @prop {string} [currentTab=hashtag] - The current tab page.
     * @prop {boolean} [isShowingErrorHint=false] - When API call fail, the user can get error hint.
     */
    this.state = {
      currentTab: params.get('tab') || 'hashtag',
      isShowingErrorHint: false,
    }
  }

  /**
   * Fetch twitter API data by keyword.
   * @param {*} keyword - The keyword can be used in both hashtag or user's tweet searching.
   */
  getTweetData(keyword) {
    this.setState({
      isShowingErrorHint: false,
    });
    const { currentTab } = this.state;
    let callApiStartAction, callApiSuccessAction, callApiEndAction;
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
      .catch(err => {
        this.setState({
          isShowingErrorHint: true,
        });
      })
      .finally(() => {
        callApiEndAction();
      });
  }

  /**
   * @type {object} CurrentInfo
   * @prop {number} currentPage - The page number of the current tab page.
   * @prop {object[]} currentData - The tweet data of the current tab page.
   * @prop {boolean} currentDataIsFetching - A boolean value for checking the current tab page is fetching data or not.
   * @prop {function} currentPageClickAction - The proper redux action of the current tab page.
   */
  /**
   * Return a set of needed info which bases on the current tab page.
   * @return {CurrentInfo}
   */
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

  /**
   * Handle on tab button click.
   * @param {string} tabName - The name of next screen tab.
   */
  onClickTab(tabName) {
    this.setState({ 
      currentTab: tabName,
      isShowingErrorHint: false, 
    });
  }

  /**
   * Convert the first character of a string to uppercase.
   * @param {string} str
   */
  setFirstCharToUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * render
   * @return {ReactElement} - Markup.
   */
  render() {
    const { currentTab, isShowingErrorHint } = this.state;
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
            <Tab active={ currentTab === 'hashtag' }>
              Hashtag search
            </Tab>
          </Link>
          <Link 
            to={{ pathname: '/search', search: '?tab=user' }} 
            onClick={() => this.onClickTab('user')}
          >
            <Tab active={ currentTab === 'user' }>
              User search
            </Tab>
          </Link>
        </TabContainer>
        <ResultContainer>
          <ResultTitle>
            {`${this.setFirstCharToUppercase(currentTab)} search`}
          </ResultTitle>
          <SearchInput 
            onClickSearchIcon={(keyword) => this.getTweetData(keyword)} 
            searchType={ this.setFirstCharToUppercase(currentTab) }
            isFetching={ currentDataIsFetching }
          />
          {
            isShowingErrorHint &&
            <ErrorHint>
              Sorry, we can't handle the search keyword, please try another one.
            </ErrorHint>
          }
          <ResultTableContainer>
            <ResultTable 
              data={ resultList } 
              isFetching={ currentDataIsFetching }
            />
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