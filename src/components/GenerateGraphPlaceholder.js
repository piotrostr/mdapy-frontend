import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'
import { LargeCard, Centered } from './styled'

export default function GenerateGraphPlaceholder() {
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
            Generate Graphs
          </MediumText>
        </div>
        <LightText>
          Generate graphs by selecting your samples and plotting
          method above
        </LightText>
      </Centered>
    </LargeCard>
  )
}
