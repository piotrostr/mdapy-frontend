import * as React from "react"
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import '@fontsource/inter'
import '@fontsource/work-sans'
import '@fontsource/ibm-plex-sans'

import Header from '../components/Header'
import InputPanel from '../components/InputPanel'
import DataSummaryPanel from '../components/DataSummaryPanel'
import SamplesPanel from '../components/SamplesPanel'
import AgeDimensionsPanel from '../components/AgeDimensionsPanel'
import GraphCard from '../components/GraphCard'
import GraphCardPlaceholder from '../components/GraphCardPlaceholder'

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

const BodyContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 30px;
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
        <BodyContainer>
          {/* todo add grid here for the sidebar and main body */}
          <GraphCardPlaceholder />
        </BodyContainer>
      </Page>
    </ThemeProvider>
  )
}

