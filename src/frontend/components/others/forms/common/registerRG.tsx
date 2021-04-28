import { useState } from "react";
import Button from "../../../elements/buttons";
import Input from "../../../elements/input";
import { FormContainer, FormSeparatorColumn, FormSeparatorRow } from "../styled";
import { BiMap, BiUser, BiFingerprint, BiCalendarEdit, BiUserPlus, BiPhone } from "react-icons/bi";
import Select from "../../../elements/selects";
import TextArea from "../../../elements/textarea";

export default function RegisterFormComponent() {

  const [Nome, setNome]: any = useState()
  const [CertidaoEmPosse, setCertidaoEmPosse]: any = useState()
  const [MotivoDaSolicitacao, setMotivoDaSolicitacao]: any = useState()
  const [RG, setRG]: any = useState()
  const [DataDeNascimento, setDataDeNascimento]: any = useState()
  const [CidadaoSabeNCpf, setCidadaoSabeNCpf]: any = useState()
  const [CPF, setCPF]: any = useState()
  const [Pai, setPai]: any = useState()
  const [Mae, setMae]: any = useState()
  const [DataDeSolicitacao, setDataDeSolicitacao]: any = useState()
  const [Usuario, setUsuario]: any = useState() // Enviar na request
  const [NaturalEstado, setNaturalEstado]: any = useState()
  const [NaturalCidade, setNaturalCidade]: any = useState()
  const [Telefone1, setTelefone1]: any = useState()
  const [Telefone2, setTelefone2]: any = useState()
  const [EnderecoResidencial, setEnderecoResidencial]: any = useState()
  const [EstadoResidencial, setEstadoResidencial]: any = useState()
  const [CidadeResidencial, setCidadeResidencial]: any = useState()
  const [CEP, setCEP]: any = useState()
  const [Status, setStatus]: any = useState()
  const [LocalAgendamento, setLocalAgendamento]: any = useState()
  const [DataAgendamento, setDataAgendamento]: any = useState()
  const [HoraAgendamento, setHoraAgendamento]: any = useState()
  const [HorarioMarcado, setHorarioMarcado]: any = useState()
  const [Observacoes, setObservacoes]: any = useState()


  const selectDATA = [
    { 
      id: 1,
      value: "valor teste",
      name: "nome teste"
    },
    { 
      id: 2,
      value: "ud2",
      name: "nome teste"
    },
    { 
      id: 3,
      value: "valor teste3",
      name: "nome teste"
    }
  ]

  return (
    <FormContainer
      height="80vh"
      margin="100px 0px 0px 0px"
      width="100%"
    >

    <FormSeparatorColumn>
    <h1> Dados Pessoais <BiUser /></h1>

        <Input fieldWidth="97%"  value={ Nome } onChange={ setNome } placeholder="Insira o nome completo" type="text" label="Nome" />

        <Input fieldWidth="97%"  value={ Pai } onChange={ setPai } placeholder="Insira algo" type="text" label="Pai" />

        <Input fieldWidth="97%"  value={ Mae } onChange={ setMae } placeholder="Insira algo" type="text" label="Mae" />
    </FormSeparatorColumn>

    <FormSeparatorColumn>
    <h1> Dados Sensíveis <BiFingerprint /> </h1>
      <Input fieldWidth="97%"  value={ DataDeNascimento } onChange={ setDataDeNascimento } placeholder="Insira algo" type="date" label="Data de Nascimento" />


      <Input fieldWidth="97%"  value={ CPF } onChange={ setCPF } placeholder="Insira algo" type="text" label="CPF" />
      
      <Input fieldWidth="97%"  value={ RG } onChange={ setRG } placeholder="Insira o RG do cidadão" type="text" label="RG" />

    </FormSeparatorColumn>

    <FormSeparatorColumn>
    <h1> Dados de Solicitação <BiUserPlus /> </h1>
      
      <Input fieldWidth="97%"  value={ CidadaoSabeNCpf } onChange={ setCidadaoSabeNCpf } placeholder="Insira algo" type="text" label="Cidadão Sabe CPF" />

      <Input fieldWidth="97%"  value={ CertidaoEmPosse } onChange={ setCertidaoEmPosse } placeholder="Insira algo" type="text" label="Certidão em posse" />

      <Input fieldWidth="97%"  value={ MotivoDaSolicitacao } onChange={ setMotivoDaSolicitacao } type="text" label="Motivo da Solicitação" />

      <Input fieldWidth="97%"  value={ DataDeSolicitacao } onChange={ setDataDeSolicitacao } type="date" label="Data de Solicitação" />

      {/* <Input fieldWidth="97%"  value={ Orgao } onChange={ setOrgao } placeholder="Insira algo" type="text" label="Orgão" /> */}

      {/* <Input fieldWidth="97%"  value={ Usuario } onChange={ setUsuario } placeholder="Insira algo" type="text" label="Usuario" /> */}

      
    </FormSeparatorColumn>


    <FormSeparatorColumn>
      <h1>Dados de Localização  <BiMap /></h1>

      <span>*Naturalidade</span>
      <Input fieldWidth="97%"  value={ NaturalEstado } onChange={ setNaturalEstado } placeholder="Insira algo" type="text" label="Natural do Estado" />

      <Input fieldWidth="97%"  value={ NaturalCidade } onChange={ setNaturalCidade } placeholder="Insira algo" type="text" label="Natural da Cidade" />
      
      <span>*Moradia atual</span>
      <Input fieldWidth="97%"  value={ EnderecoResidencial } onChange={ setEnderecoResidencial } placeholder="Insira algo" type="text" label="Endereço de Residência" />
    
      <Input fieldWidth="97%"  value={ EstadoResidencial } onChange={ setEstadoResidencial } placeholder="Insira algo" type="text" label="Estado de Residência" />

      <Input fieldWidth="97%"  value={ CidadeResidencial } onChange={ setCidadeResidencial } placeholder="Insira algo" type="text" label="Cidade de Residência" />

      <Input fieldWidth="97%"  value={ CEP } onChange={ setCEP } placeholder="Insira algo" type="text" label="CEP" />

    </FormSeparatorColumn>


    <FormSeparatorColumn style={{ marginTop: '-200px' }}>
      <h1>Contato <BiPhone /></h1>
      <FormSeparatorRow>
        <Input fieldWidth="67%"  value={ Telefone1 } onChange={ setTelefone1 } placeholder="Insira algo" type="text" label="Telefone 1" />

        <Input fieldWidth="97%"  value={ Telefone2 } onChange={ setTelefone2 } placeholder="Insira algo" type="text" label="Telefone 2" />
      </FormSeparatorRow>

    </FormSeparatorColumn>


    <FormSeparatorColumn>
        <TextArea fieldWidth="97%" fieldHeight="150px" value={ Observacoes } onChange={ setObservacoes } placeholder="Insira algo" label="Observações" resize="none" />

        <Button title="Autenticar" width="100%" height="50px" margin="20px 0px 0px 10px" />
    </FormSeparatorColumn>

    <FormSeparatorColumn style={{ marginTop: '-320px' }}>
      <h1> Status e Agendamento <BiCalendarEdit /> </h1>
      
      <Select SelectWidth="105%" SelectData={ selectDATA } value={ Status } onChange={ setStatus } label="Status" />
      
      <FormSeparatorRow style={{ marginTop: '10px'}} width="97%" >
        <Select fieldMargin="10px 0px"  SelectWidth="43%" SelectData={ selectDATA }  value={ LocalAgendamento } onChange={ setLocalAgendamento } label="Local" />

        <Input InputWidth="48%"  value={ DataAgendamento } onChange={ setDataAgendamento } type="date" label="Data" />
      </FormSeparatorRow>

      <FormSeparatorRow>  
        <Input fieldWidth="67%"  value={ HoraAgendamento } onChange={ setHoraAgendamento } placeholder="Insira algo" type="time" label="Hora" />

        <Input fieldWidth="95%"  value={ HorarioMarcado } onChange={ setHorarioMarcado } placeholder="Insira algo" type="time" label="Horário Marcado" disabled="disabled" />
      </FormSeparatorRow>
    </FormSeparatorColumn>

    
    </FormContainer>
  )
}
