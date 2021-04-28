import { useEffect, useRef } from 'react'
import { NotifyContainer } from './styled'

export default function Notify({ 
  text, 
  color, 
  bg,
  top,
  bottom,
  left,
  right
}: any) {


  const body: any = useRef()

  useEffect(()=>{
    if(text) body.current.style.display = 'flex'
    setTimeout(()=> body.current.style.display = 'none' ,5000)
  },[])

  return (
    <NotifyContainer 
    color={color}
    bg={bg}
    top={top}
    bottom={bottom}
    left={left}
    right={right}
    ref={body}
    >
      <h3>{ text }</h3>
    </NotifyContainer>
  )
}
