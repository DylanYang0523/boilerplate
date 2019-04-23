import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  & {
    tr {
      border-bottom: 1px solid #d7d7d7;
      display: grid;
      grid-column-gap: 2%;
      grid-template-columns: 28% 8% 8% 8% 8% 30%;
      text-align: left;
    }
    thead tr {
      padding: 0px 0px 20px 0px;
    }
    tbody tr {
      color: #696969;
      padding: 20px 0px;
    }
    th {
      color: #a8a9ad;
      font-weight: normal;
    }
    td {
      height: 40px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;