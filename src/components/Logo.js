import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function () {
  return(
    <StaticImage 
      src="../images/logo.svg"
      alt="logo"
      layout="fixed"
      width={85}
      height={87}
    />
  )
}
