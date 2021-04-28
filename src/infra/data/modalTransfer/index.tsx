import { createContext, useState } from 'react'
import { IModalData } from './IModalData'

export const ModalContext = createContext({} as IModalData)

export default function ModalTransferLayer({ children }: any) {

  const [ OpenModal, setOpenModal ]: any = useState(false)
  const [ Content, setContent ]: any = useState()

  return (
    <ModalContext.Provider value={{ OpenModal, setOpenModal, Content, setContent }}>
      {children}
    </ModalContext.Provider>
  )
}
