import React from 'react'
import styled from 'styled-components'
import LightText from './Text/LightText'
import { SmallCard, SmallCardHeader } from './styled'
import { ShortRow, Circle, Fill as _Fill, Row as _Row } from './DotInput'

const Entry = styled(ShortRow)`
  width: auto;
`
const Row = styled(_Row)`
  user-select: none;
  margin-left: 20px;
`

const Fill = styled(_Fill)`
  background-color: ${props => props.theme.teal};
`

function Option({ option, state, setState }) {
  return (
    <Row
      onClick={
        state.samplesToPlot !== option
          ? () => setState({ ...state, samplesToPlot: option }) 
          : () => null 
      }
    >
      <Entry>
        <Circle>
          { 
            state.samplesToPlot === option && <Fill />
          }
        </Circle>
        <LightText>
          {option}
        </LightText>
      </Entry>
    </Row>
  )
}

export default function SamplesPanel({ state, setState }) {
  return (
    <SmallCard>
      <SmallCardHeader>
        Select Samples to Plot
      </SmallCardHeader>
      <Option option={'Sample 1'} state={state} setState={setState} />
      <Option option={'Sample 2'} state={state} setState={setState} />
      <Option option={'Sample 3'} state={state} setState={setState} />
      <Option option={'Sample 4'} state={state} setState={setState} />
      <Option option={'All Samples'} state={state} setState={setState} />
    </SmallCard>
  )
}
