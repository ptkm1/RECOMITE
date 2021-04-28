import React from 'react'
import { CardContainer } from './styled'

export default function Card({ bg, title, width, height }:any) {
  return (
    <CardContainer bg={bg} width={width} height={height}>
      <h3>{ title }</h3>
    </CardContainer>
  )
}
