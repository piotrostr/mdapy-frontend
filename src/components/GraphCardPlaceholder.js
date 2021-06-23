import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'

export const Card = styled.div`
  width: 930px;
  height: 584px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Centered = styled.div`
  width: 305px;
  text-align: center;
  margin-top: 30px;
`

export default function GraphCardPlaceholder() {
  return (
    <Card>
      <StaticImage 
        src="../images/graph.svg"
        alt="graph"
        layout="fixed"
        width={414}
        height={384}
      />
      <Centered>
        <div style={{ marginBottom: 8 }}>
          <MediumText style={{ fontSize: 16 }}>
            No Data Yet
          </MediumText>
        </div>
        <LightText>
          Complete the fields and load your data into 
          the input form on the left to begin
        </LightText>
      </Centered>
    </Card>
  )
}
