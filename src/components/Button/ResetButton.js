import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import MediumText from '../Text/MediumText'
import SmallButtonContainer from './SmallButtonContainer'

export default function ResetButton({ onClick }) {
  return (
    <SmallButtonContainer onClick={onClick}>
      <StaticImage 
        src="../../images/reset.svg"
        alt="logo"
        layout="fixed"
        width={20}
        height={20}
        style={{ marginRight: 10 }}
      />
      <MediumText>
        Reset form 
      </MediumText>
    </SmallButtonContainer>
  )
}

