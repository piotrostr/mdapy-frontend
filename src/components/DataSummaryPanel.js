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
  ['Uk025', 473],
  ['Uk025', 473],
]

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #DEE5EF;
`

const Entry = styled.div`
  margin-left: 15px;
  width: 36%;
`

const Scroll = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`

export default function DataSummaryPanel({ state, setState }) {
  return (
    <SmallCard>
      <SmallCardHeader>
        Data Upload Summary
      </SmallCardHeader>
      <Row>
        <Entry>
          <MediumText>
            Sample Id
          </MediumText>
        </Entry>
        <Entry>
          <MediumText>
            Sample Size 
          </MediumText>
        </Entry>
      </Row>
      <Scroll>
        {
          state.dataSummary.length &&
            state.dataSummary.map(([id, size], key) => 
              <Row key={key}>
                <Entry>
                  <LightBoldText>
                    {id}
                  </LightBoldText>
                </Entry>
                <Entry>
                  <LightText>
                    {size}
                  </LightText>
                </Entry>
              </Row>
            )
        }
      </Scroll>
    </SmallCard>
  )
}
