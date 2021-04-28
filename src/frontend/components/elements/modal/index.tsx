import { FormEvent, useContext } from 'react'
import { BiWindowClose, BiX } from 'react-icons/bi'
import { ModalContext } from '../../../../infra/data/modalTransfer'
import { ButtonCloseModal, ModalContainer } from './styled'

export default function Modal({
  content,
  title,
}: any) {

  const { setOpenModal, OpenModal } = useContext(ModalContext)

  return (
    <ModalContainer>
      <ButtonCloseModal 
        position="fixed" 
        top="40px" 
        left="90%" 
        borderRadius="5px" 
        onClick={ 
          (e:FormEvent) => {
            e.preventDefault()
            setOpenModal(!OpenModal)
          }
         }
      > <BiX size="25px" /> </ButtonCloseModal>
      <h1>{ title }</h1>

      { content }
    </ModalContainer>
  )
}
