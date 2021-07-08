import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import MediumText from '../Text/MediumText'
import SmallButtonContainer from './SmallButtonContainer'

export default function ResetButton({ setState }) {
  function onClick() {
    setState({
      dataset: null,
      sigma: null,
      uncertaintyFormat: null,
      bestAgeCutOff: null,
      primaryDecayConstant: null,
      secondaryDecayConstant: null,
      thirdDecayConstant: null,
      primaryLongTermVar: null,
      secondaryLongTermVar: null,
      primaryCalibrationUncertainty: null,
      secondaryCalibrationUncertainty: null,
      primaryDecayUncertainty: null,
      secondaryDecayUncertainty: null,
      table: { 
        columnLabels: [],
        data: []      
      },
      dataLoaded: false,
      dataSummary: [],
      graphReady: false,
      samplesToPlot: 'Sample 1',
      agePlottingDims: '04',
      method: 'all-methods',
      individualMethod: null,
      allSamplesMethod: null
    })
  }
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

