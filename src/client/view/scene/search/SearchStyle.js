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
  color: ${props => props.active ? '#169dd7' : 'black'};
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

export const SearchInput = styled.div`
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
  margin-bottom: 60px;
`;