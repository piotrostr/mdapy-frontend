import React from 'react'
import PlottingMethodButton from './Button/PlottingMethodButton'
import MediumText from './Text/MediumText'
import { Row } from './styled'

export default function PlottingMethodsSections({ state, setState }) {

  async function fetchAllMethods() {
    setState({ ...state, loading: true })
    const url = state.urlBase + 'calculate_all_mda_methods'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application-json'
      },
      body: JSON.stringify(state)
    }) 
    const json = await res.json()
    console.log(json)
    if (json.length == 2)
      setState({ 
        ...state, 
        graphReady: true,
        svg: json[1]
      })
  }
  
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
          onClick={fetchAllMethods}
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

