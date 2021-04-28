import { useState } from 'react'
import { BiPhone, BiUserPlus, BiMap, BiUser, BiFingerprint, BiStats } from 'react-icons/bi'
import Button from '../../../elements/buttons'
import Input from '../../../elements/input'
import Select from '../../../elements/selects'
import { FormContainer, FormSeparatorColumn } from '../styled'

export default function RegisterFormComponentAdmin() {

  // Data
  const [Nome, setNome]: any = useState()
  const [Solicitante, setSolicitante]: any = useState()
  const [CertidaoEmPosse, setCertidaoEmPosse]: any = useState()
  const [MotivoDaSolicitacao, setMotivoDaSolicitacao]: any = useState()
  const [RG, setRG]: any = useState()
  const [DataDeNascimento, setDataDeNascimento]: any = useState()
  const [CidadaoSabeNCpf, setCidadaoSabeNCpf]: any = useState()
  const [CPF, setCPF]: any = useState()
  const [Pai, setPai]: any = useState()
  const [Mae, setMae]: any = useState()
  const [DataDeSolicitacao, setDataDeSolicitacao]: any = useState()
  const [Usuario, setUsuario]: any = useState()
  const [NaturalEstado, setNaturalEstado]: any = useState()
  const [NaturalCidade, setNaturalCidade]: any = useState()
  const [Telefone1, setTelefone1]: any = useState()
  const [Telefone2, setTelefone2]: any = useState()
  const [Telefone3, setTelefone3]: any = useState()
  const [Whatsapp, setWhatsapp]: any = useState()
  const [EnderecoResidencial, setEnderecoResidencial]: any = useState()
  const [EstadoResidencial, setEstadoResidencial]: any = useState()
  const [CidadeResidencial, setCidadeResidencial]: any = useState()
  const [CEP, setCEP]: any = useState()
  const [Status, setStatus]: any = useState()
  const [LocalAgendamento, setLocalAgendamento]: any = useState()
  const [DataAgendamento, setDataAgendamento]: any = useState()
  const [HoraAgendamento, setHoraAgendamento]: any = useState()
  const [Resolvido, setResolvido]: any = useState()
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
      margin="80px 10px 0px 50px"
      width="100%"
    >

    <FormSeparatorColumn>
    <h1> Dados Pessoais <BiUser /></h1>

        <Input fieldWidth="97%"  value={ Nome } onChange={ setNome } placeholder="Insira o nome completo" type="text" label="Nome" />

        <Input fieldWidth="97%"  value={ Pai } onChange={ setPai } placeholder="Insira algo" type="text" label="Pai" />

        <Input fieldWidth="97%"  value={ Mae } onChange={ setMae } placeholder="Insira algo" type="text" label="Mae" />

        <Input fieldWidth="97%"  value={ DataDeNascimento } onChange={ setDataDeNascimento } placeholder="Insira algo" type="date" label="Data de Nascimento" />

    </FormSeparatorColumn>

    <FormSeparatorColumn>
      <h1> Dados Sensíveis <BiFingerprint /> </h1>
      <Input fieldWidth="97%"  value={ CPF } onChange={ setCPF } placeholder="Insira algo" type="text" label="CPF" />
      <Input fieldWidth="97%"  value={ RG } onChange={ setRG } placeholder="Insira o RG do cidadão" type="text" label="RG" />
    </FormSeparatorColumn>

    <FormSeparatorColumn>
    <h1> Dados de Solicitação <BiUserPlus /> </h1>

      <Input fieldWidth="97%"  value={ CidadaoSabeNCpf } onChange={ setCidadaoSabeNCpf } placeholder="Insira algo" type="text" label="Cidadão Sabe CPF" />

      <Input fieldWidth="97%"  value={ CertidaoEmPosse } onChange={ setCertidaoEmPosse } placeholder="Insira algo" type="text" label="Certidão em posse" />

      <Input fieldWidth="97%"  value={ MotivoDaSolicitacao } onChange={ setMotivoDaSolicitacao } type="text" label="Motivo da Solicitação" />

      <Input fieldWidth="97%"  value={ DataDeSolicitacao } onChange={ setDataDeSolicitacao } type="date" label="Data de Solicitação" />

      {/* Mandar no registro escondido <Input fieldWidth="97%"  value={ Usuario } onChange={ setUsuario } placeholder="Insira algo" type="text" label="Usuario" /> */}

    </FormSeparatorColumn>


    <FormSeparatorColumn style={{ marginTop: '-160px' }}>
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

    <FormSeparatorColumn style={{ marginTop: '-50px' }}>
      <h1>Contato <BiPhone /></h1>

      <Input fieldWidth="97%"  value={ Telefone1 } onChange={ setTelefone1 } placeholder="Insira algo" type="text" label="Telefone 1" />

      <Input fieldWidth="97%"  value={ Telefone2 } onChange={ setTelefone2 } placeholder="Insira algo" type="text" label="Telefone 2" />

      <Input fieldWidth="97%"  value={ Telefone3 } onChange={ setTelefone3 } placeholder="Insira algo" type="text" label="Telefone 3" />

      <Input fieldWidth="97%"  value={ Whatsapp } onChange={ setWhatsapp } placeholder="Insira algo" type="text" label="Whatsapp" />
    </FormSeparatorColumn>

    <FormSeparatorColumn>
      <h1> Status <BiStats /> </h1>

      <Input fieldWidth="97%"  value={ Solicitante } onChange={ setSolicitante } placeholder="Insira algo" type="text" label="Solicitante" />

      <Select SelectWidth="105%" SelectData={ selectDATA } value={ Status } onChange={ setStatus } label="Status" />

      <Input fieldWidth="97%"  value={ LocalAgendamento } onChange={ setLocalAgendamento } placeholder="Insira algo" type="text" label="Local de Agendamento" />

      <Input fieldWidth="97%"  value={ DataAgendamento } onChange={ setDataAgendamento } type="date" label="Data de Agendamento" />

      <Input fieldWidth="97%"  value={ HoraAgendamento } onChange={ setHoraAgendamento } placeholder="Insira algo" type="text" label="Hora do Agendamento" />

      <Input fieldWidth="97%"  value={ Resolvido } onChange={ setResolvido } placeholder="Insira algo" type="text" label="Horário Marcado" />

      </FormSeparatorColumn>

      <FormSeparatorColumn style={{ marginTop: '-250px', paddingBottom: '100px' }}>
        <h1>Fim</h1>
        <Input fieldWidth="97%"  value={ Observacoes } onChange={ setObservacoes } placeholder="Insira algo" type="text" label="Observações" />

        <Button title="Autenticar" width="100%" height="50px" margin="50px 0px 0px 10px" />
      </FormSeparatorColumn>
    </FormContainer>
  )
}
