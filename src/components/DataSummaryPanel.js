import React from 'react'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'
import LightBoldText from './Text/LightBoldText'
import { SmallCard, SmallCardHeader } from './styled'

export default function DataSummaryPanel({ state, setState }) {
  return (
    <SmallCard>
      <SmallCardHeader>
        Data Upload Summary
      </SmallCardHeader>
    </SmallCard>
  )
}
