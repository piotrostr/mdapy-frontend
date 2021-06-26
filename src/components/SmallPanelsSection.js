import React from 'react'
import styled from 'styled-components'
import DataSummaryPanel from '../components/DataSummaryPanel'
import SamplesPanel from '../components/SamplesPanel'
import AgeDimensionsPanel from '../components/AgeDimensionsPanel'

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default function SmallPanelsSection({ state, setState }) {
  return (
    <Row>
      <DataSummaryPanel state={state} />
      <SamplesPanel state={state} setState={setState} />
      <AgeDimensionsPanel state={state} setState={setState} />
    </Row>
  )
}
