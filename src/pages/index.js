import * as React from "react"
import Header from '../components/Header'
import '@fontsource/inter'
import '@fontsource/work-sans'
import '@fontsource/ibm-plex-sans'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  teal: '#1493A4',
  gray: '#B7B7B7',
  fireOrange: '#293854',
  darkerGray: '#73839C',
  lightGray: '#F8F8F9',
  text: '#293854',
  stroke: '#DEE5EF'
}

const Page = styled.div`
  width: 100%;
  height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.stroke};
    padding: 0;
    margin: 0;
  }
  html {
    padding: 0;
    margin: 0;
  }
`

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header />
      </Page>
    </ThemeProvider>
  )
}

