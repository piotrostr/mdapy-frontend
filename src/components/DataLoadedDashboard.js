import React from 'react'
import GraphCard from './GraphCard'
import SmallPanelsSection from './SmallPanelsSection'
import PlottingMethodsSection from './PlottingMethodsSection'
import GenerateGraphPlaceholder from './GenerateGraphPlaceholder'
import GeneratingGraph from './GeneratingGraph'
import SummaryTable from './SummaryTable'
import BoldText from './Text/BoldText'
import LightText from './Text/LightText'
import { TableCard } from './styled'
import styled from 'styled-components'
import ExportButton from './Button/ExportButton'

const Container = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-bottom: 15px;
`

function TableAndGraph({ state }) {
  return (
    <div>
      {
        state.method === 'all-methods' &&
          <div>
            <TableCard>
              <Container>
                <div>
                  <BoldText>
                    MDA Method Summary Table
                  </BoldText>
                  <div style={{ marginTop: 5 }}>
                    <LightText>
                      All errors are quoted in absolute
                    </LightText>
                  </div>
                </div>
                <ExportButton onClick={() => null} />
              </Container>
              <SummaryTable tableData={state.tableData} />
            </TableCard>
            <GraphCard 
              svg={state.svg} 
              title={'MDA Method Comparison Plots'}
            />
          </div>
      }
      {
        state.individualMethod && 
          <div>
            <GraphCard svg={state.svg} />
          </div>
      }
      {
        state.allSamplesMethod && 
          <div>
            <GraphCard svg={state.svg} single={true} />
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
