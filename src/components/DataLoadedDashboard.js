import React from 'react'
import GraphCard from './GraphCard'
import SmallPanelsSection from './SmallPanelsSection'
import PlottingMethodsSection from './PlottingMethodsSection'
import GenerateGraphPlaceholder from './GenerateGraphPlaceholder'
import GeneratingGraph from './GeneratingGraph'
import SummaryTable from './SummaryTable'
import { TableCard } from './styled'

function TableAndGraph({ state }) {
  return (
    <div>
      {
        state.method === 'all-methods' &&
          <div>
            <TableCard>
              <SummaryTable tableData={state.tableData} />
            </TableCard>
            <GraphCard svg={state.svg} />
          </div>
      }
      {
        state.method === 'individual-methods' &&
          <div>
            <TableCard>
              <SummaryTable tableData={state.tableData} />
            </TableCard>
            <GraphCard svg={state.svg} />
          </div>
      }
      {
        state.method === 'all-samples-with-one-method' &&
          <div>
            <TableCard>
              <SummaryTable tableData={state.tableData} />
            </TableCard>
            <GraphCard svg={state.svg} />
          </div>
      }
    </div>
  )
}

export default function DataLoadedDashboard({ state, setState }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SmallPanelsSection state={state} setState={setState} />
      <PlottingMethodsSection state={state} setState={setState} />
      {
        state.graphReady 
          ? <TableAndGraph state={state} /> 
          : (
            state.loading
              ? <GeneratingGraph />
              : <GenerateGraphPlaceholder />
          )
      }
    </div>
  )
}
