import styled from 'styled-components'

export const ContainerPaises = styled.ul`
  margin: 0 auto;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 8px;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 28px;
  }
`
export type api = {
  name: string
  flag: string
  svg: string
  capital: string
  population: string
  region: string
}
