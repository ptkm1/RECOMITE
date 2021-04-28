import { FormEvent, useContext, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { ModalContext } from '../../../../infra/data/modalTransfer'
import Button from '../../elements/buttons'
import { ButtonContainer } from '../../elements/buttons/styled'
import Input from '../../elements/input'
import Modal from '../../elements/modal'
import Select from '../../elements/selects'
import { FormContainer, FormSeparatorColumn } from '../../others/forms/styled'
import RenderModalComponents from './renderModalComponents'

export default function SearchComponent() {

  const { OpenModal, setOpenModal, Content, setContent } = useContext(ModalContext)

  const [Status, setStatus]: any = useState()
  const [Nome, setNome]: any = useState()
  const [Mae, setMae]: any = useState()
  const [Usuario, setUsuario]: any = useState()
  const [Resolvido, setResolvido]: any = useState()
  const [LoginSolicitante, setLoginSolicitante]: any = useState()
  const [LocalDeAgendamento, setLocalDeAgendamento]: any = useState()

  const [DataDeSolicInicial, setDataDeSolicInicial]: any = useState()
  const [DataDeSolicFinal, setDataDeSolicFinal]: any = useState()

  // Select Component Options
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

  return (
    <FormContainer>
      { OpenModal && <Modal title="Titulo teste" content={Content}  />}
      <FormSeparatorColumn>

        <h1> Pesquisar Cidadão <BiUser /></h1>
        <Input fieldWidth="100%" value={Nome} onChange={setNome} placeholder="Insira o nome completo" type="text" label="NOME" />

        <Input fieldWidth="100%" value={Mae} onChange={setMae} placeholder="Insira o nome da mãe" type="text" label="NOME DA MÃE" />

        <Input fieldWidth="100%" value={LoginSolicitante} onChange={setLoginSolicitante} placeholder="Insira o usuario solicitante" type="text" label="LOGIN SOLICITANTE" />

        <Select labelMargin="0px 0px 15px 0px" SelectWidth="105%" SelectData={selectDATA} value={Status} onChange={setStatus} label="Status" />
        <Select labelMargin="0px 0px 15px 0px" SelectWidth="105%" SelectData={selectDATA} value={Resolvido} onChange={setResolvido} label="Resolvido" />

      </FormSeparatorColumn>

      <FormSeparatorColumn>

        <Select labelMargin="0px 0px 15px 0px" SelectWidth="105%" SelectData={selectDATA} value={LocalDeAgendamento} onChange={setLocalDeAgendamento} label="LOCAL AGENDAMENTO" />

        <Input fieldWidth="100%" value={DataDeSolicInicial} onChange={setDataDeSolicInicial} placeholder="Insira o nome completo" type="text" label="DATA DE AGENDAMENTO INICIAL" />

        <Input fieldWidth="100%" value={DataDeSolicFinal} onChange={setDataDeSolicFinal} placeholder="Insira algo" type="text" label="DATA DE AGENDAMENTO FINAL" />

        <Input fieldWidth="100%" value={DataDeSolicInicial} onChange={setDataDeSolicInicial} placeholder="Insira o nome completo" type="date" label="DATA DE AGENDAMENTO INICIAL" />
        <Input fieldWidth="100%" value={DataDeSolicFinal} onChange={setDataDeSolicFinal} placeholder="Insira algo" type="date" label="DATA DE AGENDAMENTO FINAL" />
      </FormSeparatorColumn>
      <Button title="Procurar" />
      <ButtonContainer onClick={ (e:FormEvent)=> {
        e.preventDefault()
        setOpenModal(!OpenModal)
      }}>
        Procurar
      </ButtonContainer>
    </FormContainer>
  )
}
