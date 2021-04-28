import styled from 'styled-components';

interface ITableProps {
  width?: string | number
  height?: string | number
  padding?: string | number
  borderRadius?: string | number
  background?: string
  color?: string
}

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: ${ (prop:ITableProps) => prop.width || '100%' };
  height: ${ (prop:ITableProps) => prop.height || 'max-content' };
  background: ${ (prop:ITableProps) => prop.background || '#fff' };
  border-radius: ${ (prop:ITableProps) => prop.borderRadius || '0px' };
`;

export const TableHead = styled.th`
  width: ${ (prop:ITableProps) => prop.width || 'max-content' };
  height: ${ (prop:ITableProps) => prop.height || 'max-content' };
  padding: ${ (prop:ITableProps) => prop.padding || '8px' };
  color: ${ (prop:ITableProps) => prop.color || 'gray' };
  background: ${ (prop:ITableProps) => prop.background || '#ddd' };
`
export const TableBody = styled.th`
  width: ${ (prop:ITableProps) => prop.width || 'max-content' };
  height: ${ (prop:ITableProps) => prop.height || 'max-content' };
  padding: ${ (prop:ITableProps) => prop.padding || '8px' };
  color: ${ (prop:ITableProps) => prop.color || 'gray' };
`

export const TableRow = styled.tr`
  background: ${ (prop:ITableProps) => prop.background || '#f2f2f2' };
  :hover {
    background-color: #ddd;
  }
`