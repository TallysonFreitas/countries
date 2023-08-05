import styled from 'styled-components'

export const TituloEstilo = styled.h1<Titulo>`
  color: ${(props) => props.theme.text};
  font-size: ${(Titulo) => (Titulo.fontSize ? Titulo.fontSize + 'px' : '40px')};
`
export type Titulo = {
  fontSize?: number
  children: string
}
