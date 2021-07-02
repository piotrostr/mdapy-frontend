import React from 'react'
import GraphCard from './GraphCard'
import SmallPanelsSection from './SmallPanelsSection'
import PlottingMethodsSection from './PlottingMethodsSection'
import GenerateGraphPlaceholder from './GenerateGraphPlaceholder'
import GeneratingGraph from './GeneratingGraph'


export default function DataLoadedDashboard({ state, setState }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <SmallPanelsSection state={state} setState={setState} />
      <PlottingMethodsSection state={state} setState={setState} />
      {
        state.graphReady 
          ? <GraphCard svg={state.svg} />
          : (
            state.loading
              ? <GeneratingGraph />
              : <GenerateGraphPlaceholder />
          )
      }
    </div>
  )
}
