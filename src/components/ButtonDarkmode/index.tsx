import { ButtonDarkModeStile, atributes } from './style'

export const ButtonDarkModeElement = ({ mudarTema, estado }: atributes) => {
  return (
    <ButtonDarkModeStile content={estado} onClick={mudarTema}>
      {estado ? 'Light mode' : 'Dark mode'}
    </ButtonDarkModeStile>
  )
}
