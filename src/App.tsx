import React, { useState } from 'react'
import { Container, EstiloGlobal } from './style'
import { ThemeProvider } from 'styled-components'
import { temaDark, temaLight } from './themes/style'
import { Paises } from './containers/Paises'
import { Header } from './containers/Header'

function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(true)

  function mudarTema() {
    setEstaUsandoDark(!estaUsandoDark)
  }

  const [analisando, setAnalisando] = useState(false)

  return (
    <ThemeProvider theme={estaUsandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Header mudarTema={mudarTema} estado={estaUsandoDark} />
      <Container>{analisando ? <Paises /> : <Paises />}</Container>
    </ThemeProvider>
  )
}

export default App
