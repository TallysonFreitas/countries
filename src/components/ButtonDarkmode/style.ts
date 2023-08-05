import styled from 'styled-components'

export const ButtonDarkModeStile = styled.button<buttonDarkMode>`
  padding: 8px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  &::after {
    content: '🌗';
    width: 8px;
    height: 8px;
    color: white;
  }
`

export type buttonDarkMode = {
  content: boolean
}

export type atributes = {
  estado: boolean
  mudarTema: any
}
