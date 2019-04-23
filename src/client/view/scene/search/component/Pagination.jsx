import React from 'react';

import {
  PaginationContainer,
  PageBtn,
} from './PaginationStyle';

class Pagination extends React.Component {
  render() {
    const { onClickPage, currentPage, totalPage } = this.props;
    let pageBtn = [];
    for(let i = 1; i <= totalPage; i++) {
      pageBtn.push(
        <PageBtn
          key={`pageBtn${i}`}
          active={currentPage === i}
          onClick={() => onClickPage(i)}
        >
          { i === totalPage ? '>' : i }
        </PageBtn>
      );
    }
    return (
      <PaginationContainer>
        { pageBtn }
      </PaginationContainer>
    );
  }
}

export default Pagination;