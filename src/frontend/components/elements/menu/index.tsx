import { MenuLeftContainer, MenuLeftLogo, MenuLeftOption, MenuLeftOptions } from './styled'
import Logo from '../../../../archives/unnamed.png'
import { BiHome, BiPlusCircle } from 'react-icons/bi'

export default function Menu() {
  return (
    <MenuLeftContainer>
      <MenuLeftLogo src={Logo}/>
        <MenuLeftOptions>
          <MenuLeftOption href=""> <BiHome size="23px" color="gray" /></MenuLeftOption>
          <MenuLeftOption href=""> <BiPlusCircle size="23px" color="gray" /></MenuLeftOption>
        </MenuLeftOptions>
    </MenuLeftContainer>
  )
}
