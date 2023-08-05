import { ButtonDarkModeElement } from '../../components/ButtonDarkmode'
import { atributes } from '../../components/ButtonDarkmode/style'
import { TituloElemento } from '../../components/Titulo'
import { HeaderContainer, HeaderStyled } from './style'

export const Header = ({ mudarTema, estado }: atributes) => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <TituloElemento fontSize={20}>Where In The World</TituloElemento>
        <ButtonDarkModeElement mudarTema={mudarTema} estado={estado} />
      </HeaderContainer>
    </HeaderStyled>
  )
}
