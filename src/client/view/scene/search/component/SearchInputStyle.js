import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 250px;
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid #d7d7d7;
  padding: 10px 35px 10px 14px;
  width: 100%;
  &::placeholder {
    color: #d7d7d7;
  }
`;

export const SearchIcon = styled.div`
  color: #d7d7d7;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
`;