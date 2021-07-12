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
  function selectSample() {
    if (!state.samplesToPlot.includes(option))
      setState({ 
        ...state, 
        samplesToPlot: [
          ...state.samplesToPlot,
          option 
        ].filter((item) => { return item !== 'All Samples' })
      }) 
    else  
      setState({ 
        ...state, 
        samplesToPlot: state.samplesToPlot.filter((item) => {
          return item !== option 
        })
      })
  }
  function selectAllSamples() {
    if (!state.samplesToPlot.includes(option))
      setState({ 
        ...state, 
        samplesToPlot: [
          option 
        ]
      }) 
    else    
      setState({ 
        ...state, 
        samplesToPlot: state.samplesToPlot.filter((item) => {
          return item !== option 
        })
      })
  }
  return (
    <Row
      onClick={selectSample}
    >
      <Entry>
        <Circle>
          { 
            state.samplesToPlot.includes(option) && <Fill />
          }
        </Circle>
        <LightText>
          {option}
        </LightText>
      </Entry>
    </Row>
  )
}

function AllSamplesOption({ option, state, setState }) {
  function selectAllSamples() {
    if (!state.samplesToPlot.includes(option))
      setState({ 
        ...state, 
        samplesToPlot: [option]
      }) 
    else    
      setState({ 
        ...state, 
        samplesToPlot: state.samplesToPlot.filter((item) => {
          return item !== option 
        })
      })
  }
  return (
    <Row
      onClick={selectAllSamples}
    >
      <Entry>
        <Circle>
          { 
            state.samplesToPlot.includes(option) && <Fill />
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
      {
        state.dataSummary.length &&
          state.dataSummary.map(([id, _], key) =>
            <Option 
              option={id} 
              state={state}
              setState={setState} 
            />
          )
      }
      {
        state.dataSummary.length &&
        <AllSamplesOption 
          option={'All Samples'} 
          state={state} 
          setState={setState} 
        />
      }
    </SmallCard>
  )
}
