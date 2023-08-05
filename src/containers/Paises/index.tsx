import { ContainerPaises, api } from './style'
import React, { useState, useEffect } from 'react'
import ItemPaisElemento from '../../components/PaisItem'

export const Paises = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('countryes.json')
      .then(function (resposta) {
        return resposta.json()
      })
      .then(function (obj) {
        setCountries(obj)
      })
      .catch((error) => {
        console.log('something went wrong')
        console.log(error)
      })
  }, [])
  console.log(countries)

  return (
    <ContainerPaises>
      {countries.map((pais: api) => {
        return (
          <ItemPaisElemento
            population={pais.population}
            capital={pais.capital}
            region={pais.region}
            endereco={pais.flag}
            key={pais.name}
            country={pais.name}
          ></ItemPaisElemento>
        )
      })}
    </ContainerPaises>
  )
}
