import { Listando, ListandoItem, listagem } from './style'

export const Lista = ({ population, region, capital }: listagem) => {
  return (
    <Listando>
      <ListandoItem>
        <strong>Population: </strong>
        {population}
      </ListandoItem>
      <ListandoItem>
        <strong>Region: </strong>
        {region}
      </ListandoItem>
      <ListandoItem>
        <strong>Capital: </strong>
        {capital}
      </ListandoItem>
    </Listando>
  )
}
