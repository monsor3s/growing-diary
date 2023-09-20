import { HeaderContainer, LogoLeaf } from './styles'
import Logo from '../../assets/leaf-2-2.png'

export default function Header() {
  return (
    <>
      <HeaderContainer>
            <LogoLeaf src={Logo} alt='logo header' />
            <span>growing diary</span>
      </HeaderContainer>
    </>
  )
}
