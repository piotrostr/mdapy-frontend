import React from 'react'
import styled from 'styled-components'
import GraphCard from '../components/GraphCard'
import SmallPanelsSection, { Row } from '../components/SmallPanelsSection'
import GenerateGraphPlaceholder from '../components/GenerateGraphPlaceholder'


export default function DataLoadedDashboard({ state, setState }) {
  return (
    <div>
      <SmallPanelsSection />
      <Row>
      </Row>
      {
        state.graphReady 
          ? <GraphCard />
          : <GenerateGraphPlaceholder />
      }
    </div>
  )
}
