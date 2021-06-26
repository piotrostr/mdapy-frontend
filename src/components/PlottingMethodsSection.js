import React from 'react'
import PlottingMethodButton from './Button/PlottingMethodButton'
import MediumText from './Text/MediumText'
import { Row } from './styled'

export default function PlottingMethodsSections({ state, setState }) {
  return (
    <div style={{ marginBottom: 30 }}>
      <div style={{ marginBottom: 12, marginLeft: 2 }}>
        <MediumText>
          Choose Between 3 Plotting Methods
        </MediumText>
      </div>
      <Row>
        <PlottingMethodButton 
          text={'Calculate All MDA Methods and Plot'} 
          onClick={() => null}
        />
        <PlottingMethodButton 
          text={'Calculate Individual MDAs and Plot'} 
          onClick={() => null}
        />
        <PlottingMethodButton 
          text={'Plot All Samples With One MDA Method'} 
          onClick={() => null}
        />
      </Row>
    </div>
  )
}

