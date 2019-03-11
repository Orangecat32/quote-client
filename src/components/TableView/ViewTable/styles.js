import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  min-width: 300px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  .th{ 

    border: 1px solid rgba(51, 53, 49, 0.26);
    padding: .5em 1em;
    text-align: left;
  }
  .td{
    border: 1px solid rgba(51, 53, 49, 0.26);
    padding: .5em 1em;
    text-align: left;
  }
`;


export const Thead = styled.thead`
  .th { position: sticky; top: 0; }
`;

export const Tbody = styled.tbody`
  overflow-y: auto; 
`;

export const Tr = styled.tr`
  &:nth-child(even) { background: rgb(124, 121, 121); }
  &:nth-child(odd)  { background: rgb(130, 130, 140); }
`;

export const Tdn = styled.td`
  text-align: right;
`;

export const Td = styled.td`
  text-align: left;
`;