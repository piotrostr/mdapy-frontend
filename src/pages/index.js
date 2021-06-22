import React, { useState } from 'react'
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
  height: 180vh;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const BodyContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  padding-top: 25px;
  flex-direction: row;
  justify-content: center;
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
  const [state, setState] = useState({
    dataset: null,
    bestAgeCutOff: null,
    primaryDecayConstant: null,
    secondaryDecayConstant: null,
    thirdDecayConstant: null,
    primaryLongTermVar: null,
    secondaryLongTermVar: null,
    primaryCalibrationUncertainty: null,
    secondaryCalibrationUncertainty: null,
    primaryDecayUncertainty: null,
    secondaryDecayUncertainty: null
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header />
        <BodyContainer>
          {/* todo add grid here for the sidebar and main body */}
          <InputPanel state={state} setState={setState} />
          <GraphCardPlaceholder />
        </BodyContainer>
      </Page>
    </ThemeProvider>
  )
}

