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
    urlBase: 'http://localhost:5000/',
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
        [{'value': 'UK027'}, {'value': '1167,3'}, {'value': '4,9'}], 
        [{'value': 'UK026'}, {'value': '1185,5'}, {'value': '4,8'}],
        [{'value': 'UK026'}, {'value': '1201,6'}, {'value': '4,8'}], 
        [{'value': 'UK027'}, {'value': '1207,5'}, {'value': '5,6'}], 
        [{'value': 'UK026'}, {'value': '1209,6'}, {'value': '4,7'}],
        [{'value': 'UK027'}, {'value': '1231,1'} , {'value': '15,4'}],
        [{'value': 'UK026'}, {'value': '1258,1'}, {'value': '4,7'}],
        [{'value': 'UK027'}, {'value': '1287,2'}, {'value': '4,7'}] , 
        [{'value': 'UK026'}, {'value': '1326,9'}, {'value': '12,6'}],
        [{'value': 'UK026'}, {'value': '1338,2'}, {'value': '8,9'}], 
        [{'value': 'UK026'}, {'value': '1326,9'}, {'value': '12,6'}], 
        [{'value': 'UK026'}, {'value': '1338,2'}, {'value': '8,9'}]]      
    },
    dataLoaded: false,
    dataSummary: [],
    graphReady: false,
    samplesToPlot: 'Sample 1',
    agePlottingDims: '04',
  })
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header setState={setState} />
        <BodyContainer>
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

