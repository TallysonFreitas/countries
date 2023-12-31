import { Lista } from '../Lista'
import { TituloElemento } from '../Titulo'
import {
  ItemPais,
  ItemPaisTipo,
  FotoPais,
  ContainerImagem,
  ContainerTexto
} from './style'

export const ItemPaisElemento = ({
  endereco,
  country,
  population,
  capital,
  region,
  selecionado
}: ItemPaisTipo) => {
  return (
    <ItemPais>
      <ContainerImagem onClick={selecionado}>
        <FotoPais src={endereco} alt="imagem" />
      </ContainerImagem>
      <ContainerTexto>
        <TituloElemento fontSize={22}>{country}</TituloElemento>
        <Lista population={population} capital={capital} region={region} />
      </ContainerTexto>
    </ItemPais>
  )
}

export default ItemPaisElemento
