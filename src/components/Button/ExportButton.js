import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function ExportButton() {
  return (
    <StaticImage 
      src="../../images/export.svg"
      alt="logo"
      layout="fixed"
      width={17}
      height={17}
    />
  )
}

