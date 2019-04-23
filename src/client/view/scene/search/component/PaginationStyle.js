import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-top: 50px;
`;

export const PageBtn = styled.div`
  background-color: ${props => props.active ? '#169dd7' : 'white'};
  border: 1px solid #a8a9ad;
  border-radius: 2px;
  color: ${props => props.active ? 'white' : '#696969'};
  cursor: pointer;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  margin-right: 16px;
  text-align: center;
  width: 40px;
  &:hover {
    background-color: #169dd7;
    color: white;
  }
`;