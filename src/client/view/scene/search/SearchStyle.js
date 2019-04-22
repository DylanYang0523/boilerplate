import styled from 'styled-components';

export const TabContainer = styled.div`
  background-color: white;
  padding: 0px 30px;
`;

export const Tab = styled.div`
  display: inline-block;
  padding: 16px;
  cursor: pointer;
  background-color: ${props => props.active ? '#f8f8fa' : 'white'};
  color: ${props => props.active ? '#169dd7' : '#696969'};
  &:hover {
    color: #169dd7;
  }
`;

export const ResultContainer = styled.div`
  background-color: #f8f8fa;
  padding: 16px 46px;
  min-height: 100vh;
`;

export const ResultTitle = styled.div`
  color: #a8a9ad;
  margin-bottom: 8px;
`;

export const SearchInputWrapper = styled.div`
  width: 250px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border: 1px solid #d7d7d7;
  background-color: white;
  padding: 10px 35px 10px 14px;
  &::placeholder {
    color: #d7d7d7;
  }
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  color: #d7d7d7;
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const ResultTableContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 90px;
  background-color: white;
  padding: 20px 20px 40px 20px;
  & {
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th {
      color: #a8a9ad;
      font-weight: normal;
    }
    tr {
      border-bottom: 1px solid #d7d7d7;
      text-align: left;
      display: grid;
      grid-template-columns: 28% 8% 8% 8% 8% 30%;
      grid-column-gap: 2%;
    }
    thead tr {
      padding: 0px 0px 20px 0px;
    }
    tbody tr {
      padding: 20px 0px;
      color: #696969;
    }
    td {
      height: 40px;
      overflow: hidden;
      line-height: 20px;
      text-overflow: ellipsis;
    }
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 50px;
`;

export const PageBtn = styled.div`
  border: 1px solid #a8a9ad;
  border-radius: 2px;
  text-align: center;
  line-height: 40px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
  display: inline-block;
  background-color: ${props => props.active ? '#169dd7' : 'white'};
  color: ${props => props.active ? 'white' : '#696969'};
  cursor: pointer;
  &:hover {
    background-color: #169dd7;
    color: white;
  }
`;