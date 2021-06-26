import React from 'react'
import LightText from './Text/LightText'
import styled from 'styled-components'
import { SmallCard, SmallCardHeader } from './styled'

const SmallInput = styled.input`
  width: 101px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #1493A4;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 15px;
  margin-left: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #73839C;
  padding: 5px 16px 5px;
`

export default function AgeDimensionPanel({ state, setState }) {
  console.log(Object.keys(state))
  return (
    <SmallCard>
      <SmallCardHeader>
        Age Plotting Dimensions
      </SmallCardHeader>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <LightText>
          For individual MDA plots with all ages plotted, this input controls the
          maximum age to be plotted to control how many measurements are shown on
          one plot. Input (Ma) will be added to the oldest age in the age
          clusters to give a max plotting age
        </LightText>
        <SmallInput 
          value={state.agePlottingDims} 
          onChange={e => setState({
            ...state,
            agePlottingDims: e.target.event
          })} 
        />
      </div>
    </SmallCard>
  )
}
