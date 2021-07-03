import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import MediumText from '../Text/MediumText'

export default function ExportButton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <StaticImage 
        src="../../images/export.svg"
        alt="logo"
        layout="fixed"
        width={17}
        height={17}
      />
      <MediumText style={{ marginLeft: 20, userSelect: 'none' }}>
        Export
      </MediumText>
    </div>
  )
}

