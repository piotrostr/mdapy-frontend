import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'
import { LargeCard, Centered } from './styled'

export default function GraphCardPlaceholder() {
  return (
    <LargeCard>
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
    </LargeCard>
  )
}
