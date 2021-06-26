import React from 'react'
import DataSummaryPanel from './DataSummaryPanel'
import SamplesPanel from './SamplesPanel'
import AgeDimensionsPanel from './AgeDimensionsPanel'
import { Row } from './styled'


export default function SmallPanelsSection({ state, setState }) {
  return (
    <Row>
      <DataSummaryPanel state={state} />
      <SamplesPanel state={state} setState={setState} />
      <AgeDimensionsPanel state={state} setState={setState} />
    </Row>
  )
}
