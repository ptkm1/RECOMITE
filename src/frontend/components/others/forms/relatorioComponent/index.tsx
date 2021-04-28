import { FormEvent, useState } from "react";
import { BiCalendarCheck, BiCalendarEvent, BiDetail } from "react-icons/bi";
import Input from "../../../elements/input";
import Select from "../../../elements/selects";
import { FormContainer, FormSeparatorColumn } from "../styled";

import { CSVLink, CSVDownload } from 'react-csv'

export default function RelatorioComponent({ }: any) {

  const ButtonStyleCSV = {
    width: '100%',
    height: '60px',
    background: 'royalblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '5px',
    marginTop: 50
  }

  const [DataDeAgendamentoInicial, setDataDeAgendamentoInicial]: any = useState()
  const [DataDeAgendamentoFinal, setDataDeAgendamentoFinal]: any = useState()
  const [LocalDeAgendamento, setLocalDeAgendamento]: any = useState()

  const [Status,setStatus]: any = useState()
  const [Nome,setNome]: any = useState()
  const [Mae, setMae]: any = useState()

  const [Usuario, setUsuario]: any = useState()
  const [DataDeSolicInicial, setDataDeSolicInicial]: any = useState()
  const [DataDeSolicFinal, setDataDeSolicFinal]: any = useState()
  const [OrgaoSolicitante, setOrgaoSolicitante]: any = useState()



  const selectDATA = [
    {
      id: 1,
      value: "valor teste",
      name: "nome teste"
    },
    {
      id: 2,
      value: "valor teste2",
      name: "nome teste"
    }
  ]

  // CSV Data-Testing
  const CSV = [
    { nome: 'patrick', email: 'patrick@gmail.com', idade: '15' },
    { nome: 'patrick', email: 'patrick@gmail.com', idade: '15' },
    { nome: 'patrick', email: 'patrick@gmail.com', idade: '15' },
    { nome: 'patrick', email: 'patrick@gmail.com', idade: '15' },
    { nome: 'patrick', email: 'patrick@gmail.com', idade: '15' },
    { nome: 'patrick', email: 'patrick@gmail.com', idade: '15' },
  ]

  const headers = [
    { label: "nome", key: "nome" },
    { label: "email", key: "email" },
    { label: "idade", key: "idade" }
  ]

  const headers2 = [
    { label: "nome", key: "nome" },
    { label: "email", key: "email" },
    { label: "idade", key: "idade" }
  ]

  const csvResolver = {
    filename: 'Report.csv',
    headers,
    data: CSV,
    headers2
  }
  ////////////////////////////////

  const PegarRelatorio = async (evt: FormEvent) => {
    evt.preventDefault()
  }

  return (
    <FormContainer
      height="80vh"
      margin="100px 0px 0px 0px"
      width="100%"
      grids="33.33% 33.33% 33.33%"
    >
    
      <FormSeparatorColumn>
      <h1> RELATÓRIO DE REIMPRESSÃO <BiDetail /></h1>

        <Select labelMargin="0px 0px 15px 0px" SelectWidth="105%" SelectData={ selectDATA } value={ Status } onChange={ setStatus } label="Status" />

        <Input fieldWidth="100%"  value={ Nome } onChange={ setNome } placeholder="Insira o nome completo" type="text" label="Nome" />

        <Input fieldWidth="100%"  value={ Mae } onChange={ setMae } placeholder="Insira o nome da mãe" type="text" label="Nome da mãe" />

        <Input fieldWidth="100%"  value={ DataDeSolicInicial } onChange={ setDataDeSolicInicial } placeholder="Insira o nome completo" type="text" label="DATA DE AGENDAMENTO INICIAL" />

        <Input fieldWidth="100%"  value={ DataDeSolicFinal } onChange={ setDataDeSolicFinal } placeholder="Insira algo" type="text" label="DATA DE AGENDAMENTO FINAL" />
        
        <CSVLink style={ButtonStyleCSV} {...csvResolver}>Baixar</CSVLink>

      </FormSeparatorColumn>


      <FormSeparatorColumn  >
      <h1> RELATÓRIO DE PRODUTIVIDADE DIÁRIA <BiCalendarEvent /></h1>

        <Select labelMargin="0px 0px 15px 0px" SelectWidth="105%" SelectData={ selectDATA } value={ Status } onChange={ setStatus } label="Status" />

        <Select labelMargin="0px 0px 15px 0px" SelectWidth="105%" SelectData={ selectDATA } value={ OrgaoSolicitante } onChange={ setOrgaoSolicitante } label="Status" />

        <Input fieldWidth="100%"  value={ DataDeSolicInicial } onChange={ setDataDeSolicInicial } placeholder="Insira o nome completo" type="text" label="DATA DE AGENDAMENTO INICIAL" />

        <Input fieldWidth="100%"  value={ DataDeSolicFinal } onChange={ setDataDeSolicFinal } placeholder="Insira algo" type="text" label="DATA DE AGENDAMENTO FINAL" />



        <CSVLink style={ButtonStyleCSV} {...csvResolver}>Baixar</CSVLink>
      </FormSeparatorColumn>

      <FormSeparatorColumn>
      <h1> RELATÓRIO DE AGENDAMENTO <BiCalendarCheck /></h1>

        <Input fieldWidth="100%"  value={ DataDeAgendamentoInicial } onChange={ setDataDeAgendamentoInicial } placeholder="Insira o nome completo" type="text" label="DATA DE AGENDAMENTO INICIAL" />

        <Input fieldWidth="100%"  value={ DataDeAgendamentoFinal } onChange={ setDataDeAgendamentoFinal } placeholder="Insira algo" type="text" label="DATA DE AGENDAMENTO FINAL" />

        <Select labelMargin="0px 0px 15px 0px" SelectWidth="105%" SelectData={ selectDATA } value={ LocalDeAgendamento } onChange={ setLocalDeAgendamento } label="LOCAL AGENDAMENTO" />

        <CSVLink style={ButtonStyleCSV} {...csvResolver}>Baixar</CSVLink>
      </FormSeparatorColumn>

    </FormContainer>
  )
}
