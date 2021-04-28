import React from 'react'
import { CardContainer } from './styled'

export default function Card({ bg, title, width, height, margin, callback }:any) {
  return (
    <CardContainer bg={bg} width={width} height={height} margin={margin} onClick={ () => window.location.href = callback }>
      <h3>{ title }</h3>
    </CardContainer>
  )
}
