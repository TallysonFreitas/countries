import styled from 'styled-components'

export const Listando = styled.ul`
  width: 100%;
  padding-top: 16px;
`

export const ListandoItem = styled.li`
  color: ${(props) => props.theme.text};
  margin-bottom: 8px;
`

export type listagem = {
  population: string
  region: string
  capital: string
}
