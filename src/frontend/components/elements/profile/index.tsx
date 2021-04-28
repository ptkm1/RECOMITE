import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'
import { TopProfile, TopProfileCircle, TopProfileName } from './styled'

export default function ProfileComponent() {
  return (
    <>
    <TopProfile>
        <TopProfileCircle src={'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Blank&hatColor=Red&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown'} />
        <TopProfileName>Patrick</TopProfileName>
        <button onClick={ () => localStorage.clear() }>
          <BiDoorOpen size="22px" color="gray" />
        </button>
    </TopProfile> 
    </>
  )
}
