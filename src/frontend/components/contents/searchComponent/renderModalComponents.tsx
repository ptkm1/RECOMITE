
import Table from '../../elements/table'
import { TableRow, TableBody } from '../../elements/table/styled'

export default function RenderModalComponents() {

  const head = [
    { title: 'DATA' },
    { title: 'ÓRGÃO' },
    { title: 'NOME' },
    { title: 'RG' },
    { title: 'STATUS' },
    { title: 'LOCAL AGEND.' },
    { title: 'DATA AGEND.' },
    { title: 'AGEND.' },
    { title: 'USUÁRIO.' },
    { title: 'TELEGRAM?' },
    { title: 'EDITAR' },
    { title: 'APAGAR' } 					 				
  ]
  const rows = [
    { data: '00-00-0000', orgao: 'mp', nome: 'patrick', rg: '0799828084', status: 'RESOLVIDO', localAgendamento: 'IIPM', dataAgendamento: '00-00-0000', horaAgendamento: '12:00', usuario: 'danielapm', telegram: 'sim'  },
    { data: '00-00-0000', orgao: 'mp', nome: 'patrick', rg: '0799828084', status: 'RESOLVIDO', localAgendamento: 'IIPM', dataAgendamento: '00-00-0000', horaAgendamento: '12:00', usuario: 'danielapm', telegram: 'sim'  },
    { data: '00-00-0000', orgao: 'mp', nome: 'patrick', rg: '0799828084', status: 'RESOLVIDO', localAgendamento: 'IIPM', dataAgendamento: '00-00-0000', horaAgendamento: '12:00', usuario: 'danielapm', telegram: 'sim'  },
  ]

  const data = rows.map((e: any) => (
    <TableRow>
      <TableBody>
        {e.data}
      </TableBody>
      <TableBody>
        {e.orgao}
      </TableBody>
      <TableBody>
        {e.nome}
      </TableBody>
      <TableBody>
        {e.rg}
      </TableBody>
      <TableBody>
        {e.localAgendamento}
      </TableBody>
      <TableBody>
        {e.dataAgendamento}
      </TableBody>
      <TableBody>
        {e.horaAgendamento}
      </TableBody>
      <TableBody>
        {e.usuario}
      </TableBody>
      <TableBody>
        {e.telegram}
      </TableBody>
      <TableBody>
        {e.usuario}
      </TableBody>

      <TableBody>
        editar
      </TableBody>
      <TableBody>
        apagar
      </TableBody>
      
    </TableRow>
))

  return <Table dataHead={head} dataRows={rows} data={ data } />
}