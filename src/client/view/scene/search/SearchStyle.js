import styled from 'styled-components';

export const TabContainer = styled.div`
  background-color: white;
  padding: 0px 30px;
`;

export const Tab = styled.div`
  background-color: ${props => props.active ? "#f8f8fa" : "white"};
  display: inline-block;
  color: ${props => props.active ? "#169dd7" : "#696969"};
  cursor: pointer;
  padding: 16px;
  &:hover {
    color: #169dd7;
  }
`;

export const ResultContainer = styled.div`
  background-color: #f8f8fa;
  min-height: 100vh;
  padding: 16px 46px;
`;

export const ResultTitle = styled.div`
  color: #a8a9ad;
  margin-bottom: 8px;
`;

export const ErrorHint = styled.div`
  color: #ff6868;
  font-size: 12px;
  margin-top: 8px;
`;

export const ResultTableContainer = styled.div`
  background-color: white;
  margin-bottom: 90px;
  margin-top: 30px;
  padding: 20px 20px 40px 20px;
`;
