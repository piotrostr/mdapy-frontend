import React from 'react'
import styled from 'styled-components'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'
import LightBoldText from './Text/LightBoldText'
import { SmallCard, SmallCardHeader } from './styled'

const data = [
  ['Uk025', 473],
  ['Uk025', 473],
  ['Uk025', 473],
  ['Uk025', 473],
]

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #DEE5EF;
`

function Table({ data }) {
  // add overflow so it scrolls?
  return (
    <div>
      <Row>
        <MediumText>
          Sample Id
        </MediumText>
        <MediumText>
          Sample Size 
        </MediumText>
      </Row>
      {
        data.map(([id, size], key) => 
          <Row key={key}>
            <LightBoldText>
              {id}
            </LightBoldText>
            <LightText>
              {size}
            </LightText>
          </Row>
        )
      }
    </div>
  )
}

export default function DataSummaryPanel({ state, setState }) {
  return (
    <SmallCard>
      <SmallCardHeader>
        Data Upload Summary
      </SmallCardHeader>
      <Table data={data} />
    </SmallCard>
  )
}
