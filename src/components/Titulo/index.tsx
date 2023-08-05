import { Titulo, TituloEstilo } from './style'

export const TituloElemento = ({ fontSize = 40, children }: Titulo) => {
  return <TituloEstilo fontSize={fontSize}>{children}</TituloEstilo>
}
