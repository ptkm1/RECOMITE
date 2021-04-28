import { FormEvent } from 'react'
import { ButtonContainer } from './styled'

export default function Button({bg, hover, width, height, margin, title}: any) {
  return (
    <ButtonContainer 
      bg={ bg } 
      hover={ hover } 
      width={ width } 
      height={ height }
      margin={ margin }
    >
      { title }
    </ButtonContainer>
  )
}
