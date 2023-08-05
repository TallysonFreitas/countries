import styled from 'styled-components'

export const ItemPais = styled.li`
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.elements};
  overflow-y: hidden;

  @media (max-width: 1200px) {
    max-width: 280px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
export type ItemPaisTipo = {
  endereco: string
  country: string
  population: string
  region: string
  capital: string
  selecionado: any
}

export const ContainerImagem = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: hidden;
  cursor: pointer;

  @media (max-width: 1200px) {
    max-height: 160px;
  }

  @media (max-width: 768px) {
    max-height: none;
    height: auto;
  }
`

export const ContainerTexto = styled.div`
  width: 100%;
  padding: 16px 16px 24px;
`

export const FotoPais = styled.img`
  width: 100%;
`
