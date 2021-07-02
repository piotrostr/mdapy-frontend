import React from 'react'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'
import { LargeCard, Centered } from './styled'
import PulseLoader from 'react-spinners/PulseLoader'
import styled from 'styled-components'

const IndicatorContainer = styled.div`
  width: 414px;
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function GeneratingGraph() {
  return (
    <LargeCard>
      <IndicatorContainer>
        <PulseLoader color={'#1493A4'} loading={true} size={30} />
      </IndicatorContainer>
      <Centered>
        <div style={{ marginBottom: 8 }}>
          <MediumText style={{ fontSize: 16 }}>
            Generating graphs...
          </MediumText>
        </div>
        <LightText>
          The data has been inputted and graphs 
          will be displayed shortly
        </LightText>
      </Centered>
    </LargeCard>
  )
}
