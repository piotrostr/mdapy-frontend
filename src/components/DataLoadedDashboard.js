import React from 'react'
import styled from 'styled-components'
import GraphCard from './GraphCard'
import SmallPanelsSection, { Row } from './SmallPanelsSection'
import PlottingMethodsSection from './PlottingMethodsSection'
import GenerateGraphPlaceholder from './GenerateGraphPlaceholder'


export default function DataLoadedDashboard({ state, setState }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <SmallPanelsSection state={state} setState={setState} />
      <PlottingMethodsSection state={state} setState={setState} />
      {
        state.graphReady 
          ? <GraphCard />
          : <GenerateGraphPlaceholder />
      }
    </div>
  )
}
