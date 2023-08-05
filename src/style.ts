import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    list-style: none;
  }

  body{
    background-color: ${(props) => props.theme.background};
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
`
