import { TableContainer, TableHead, TableRow } from './styled'

export default function Table({
  TableWidth,
  TableHeight,
  TrWidth,
  TRHeight,
  bg,
  borderRadius,
  dataHead,
  dataRows,
  data
}: any) {
  return (
    <TableContainer borderRadius={borderRadius} width={TableWidth} height={TableHeight} background={bg}>
      <TableRow width={TrWidth} height={TRHeight}>
        {
          dataHead.map((e: any) => (
            <TableHead>
              {e.title}
            </TableHead>
          ))
        }

      </TableRow>
      { data }

    </TableContainer>
  )
}
