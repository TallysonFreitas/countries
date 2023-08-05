import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.elements};
  margin-bottom: 40px;
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
