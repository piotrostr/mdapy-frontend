import React, { useState } from 'react'
import '@fontsource/inter'
import '@fontsource/work-sans'
import '@fontsource/ibm-plex-sans'
import { ThemeProvider } from 'styled-components'
import { 
  theme, 
  Page, 
  BodyContainer,
  GlobalStyle
} from '../components/styled'
import Header from '../components/Header'
import InputPanel from '../components/InputPanel'
import DataInputCard from '../components/DataInputCard'
import GraphCardPlaceholder from '../components/GraphCardPlaceholder'
import DataLoadedDashboard from '../components/DataLoadedDashboard'

export default function Main() {
  const [state, setState] = useState({
    dataset: null,
    sigma: null,
    uncertaintyFormat: null,
    bestAgeCutOff: null,
    primaryDecayConstant: null,
    secondaryDecayConstant: null,
    thirdDecayConstant: null,
    primaryLongTermVar: null,
    secondaryLongTermVar: null,
    primaryCalibrationUncertainty: null,
    secondaryCalibrationUncertainty: null,
    primaryDecayUncertainty: null,
    secondaryDecayUncertainty: null,
    table: {
      columnLabels: [],
      data: [
        ['foo', 'bar', 'baz'], 
        [], [], [], [], [], [], [], [], []
      ]
    },
    dataLoaded: false,
    graphReady: false
  })
return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header setState={setState} />
        <BodyContainer>
          {/* todo add grid here for the sidebar and main body */}
          <InputPanel state={state} setState={setState} />
          {
            state.dataset 
              ?  
              (
                !state.dataLoaded 
                ?  
                <DataInputCard 
                  state={state} 
                  setState={setState}
                />
                : 
                <DataLoadedDashboard 
                  state={state} 
                  setState={setState} 
                />
              )
              :  
              <GraphCardPlaceholder />
          }
        </BodyContainer>
      </Page>
    </ThemeProvider>
  )
}

