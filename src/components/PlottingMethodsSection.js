import React, { useState, useEffect } from 'react'
import PlottingMethodButton from './Button/PlottingMethodButton'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'
import { Row } from './styled'
import Modal from 'react-modal'
import { Circle, Fill } from './DotInput'

export const options = [
  {
    value: 'YC1s',
    label: 'YC1s'
  },
  {
    value: 'YC2s',
    label: 'YC2s'
  },
  {
    value: 'Tau',
    label: 'Tau'
  },
  {
    value: 'YSP',
    label: 'YSP'
  },
  /*
  {
    value: 'MLA',
    label: 'MLA'
  },
  */
  {
    value: 'YDZ',
    label: 'YDZ'
  },
  {
    value: 'Y3Zo',
    label: 'Y3Zo'
  },
  {
    value: 'Y3Za',
    label: 'Y3Za'
  },
  {
    value: 'YSG',
    label: 'YSG'
  },
  /*
  {
    value: 'All',
    label: 'Plot All Methods At Once'
  },
  */
]

const modalStyle = {
  overlay: {
    width: '100%',
    height: '100%' 
  },
  content: { 
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    justifyContent: 'space-around',
    paddingVertical: 20, 
    width: 314,
    height: 535,
    background: '#FFFFFF',
    borderRadius: 4,
    margin: 'auto'
  } 
}

export default function PlottingMethodsSections({ state, setState }) {

  const [individualOpen, setIndividualOpen] = useState(false)
  const [allSamplesOpen, setAllSamplesOpen] = useState(false)

  useEffect(() => {
    if (state.individualMethod) {
      fetchIndividualMethod(state.individualMethod)
    }
    if (state.allSamplesMethod) {
      fetchAllSamplesMethod(state.allSamplesMethod)
    }
  }, [
    state.individualMethod, 
    state.allSamplesMethod
  ])

  async function fetchAllMethods() {
    try {
      setState({ 
        ...state, 
        loading: true,
        graphReady: false,
        svg: null,
        tableData: null 
      })
      const url = state.urlBase + 'calculate_all_mda_methods'
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application-json'
        },
        body: JSON.stringify(state)
      }) 
      const json = await res.json()
      if (json.length == 2) {
        setState({ 
          ...state, 
          method: 'all-methods',
          loading: false,
          graphReady: true,
          svg: json[1],
          tableData: JSON.parse(json[0]),
          individualMethod: null,
          allSamplesMethod: null
        })
      }
    } catch {
      alert('Backend Error.')
      setState({
        ...state,
        loading: false,
        graphReady: false
      })
    }
  }

  async function fetchIndividualMethod(method) {
    try {
      setState({
        ...state,
        loading: true,
        graphReady: false,
        svg: null,
        tableData: null 
      })
      const url = state.urlBase + 'calculate_individual_' + method
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application-json'
        },
        body: JSON.stringify(state)
      }) 
      const json = await res.json()
      if (json) {
        setState({ 
          ...state, 
          graphReady: true,
          svg: json[1],
          loading: false,
          tableData: JSON.parse(json[0]),
          method: null
        })
      }
    } catch {
      alert('Backend Error.')
      setState({
        ...state,
        loading: false,
        graphReady: false
      })
    }
  }

  async function fetchAllSamplesMethod(method) {
    try {
      setState({
        ...state,
        loading: true,
        graphReady: false,
        svg: null,
        tableData: null
      })
      const url = state.urlBase + 'calculate_all_samples_' + method
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application-json'
        },
        body: JSON.stringify(state)
      }) 
      const json = await res.json()
      if (json)
        setState({ 
          ...state, 
          graphReady: true,
          svg: json[0],
          loading: false,
          method: null,
          allSamplesFetched: true
        })
    } catch {
      alert('Backend Error.')
      setState({
        ...state,
        loading: false,
        graphReady: false
      })
    }
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
          onClick={
            !state.loading 
              ? fetchAllMethods
              : () => null
          }
        />
        <PlottingMethodButton 
          text={'Calculate Individual MDAs and Plot'} 
          onClick={
            !state.loading 
              ? (
                !(individualOpen || allSamplesOpen)
                  ? () => setIndividualOpen(true)
                  : () => null
              )
              : () => null
          }
        />
        <PlottingMethodButton 
          text={'Plot All Samples With One MDA Method'} 
          onClick={
            !state.loading 
              ? (
                !(individualOpen || allSamplesOpen)
                  ? () => setAllSamplesOpen(true)
                  : () => null
              )
              : () => null
          }
        />
      </Row>
      <Modal
        isOpen={individualOpen}
        style={modalStyle}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIndividualOpen(false)}
        ariaHideApp={false}
      >
        {
          options.map((option, key) =>
            <div 
              key={key} 
              onClick={
                () => setState(state => ({
                  ...state, 
                  individualMethod: option.value,
                  allSamplesMethod: null
                }))
              }
              style={{ 
                display: 'flex',
                userSelect: 'none',
                flexDirection: 'row',
              }}
            >
              <Circle>
                { 
                  state.individualMethod === option.value && <Fill />
                }
              </Circle>
              <LightText>
                {option.label}
              </LightText>
            </div>
          )
        }
      </Modal>
      <Modal
        isOpen={allSamplesOpen}
        style={modalStyle}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setAllSamplesOpen(false)}
      >
        {
          options.map((option, key) =>
            <div 
              key={key} 
              onClick={
                () => setState(state => ({
                  ...state, 
                  allSamplesMethod: option.value,
                  individualMethod: null
                }))
              }
              style={{ 
                display: 'flex',
                userSelect: 'none',
                flexDirection: 'row',
              }}
            >
              <Circle>
                { 
                  state.allSamplesMethod === option.value && <Fill />
                }
              </Circle>
              <LightText>
                {option.label}
              </LightText>
            </div>
          )
        }
      </Modal>
    </div>
  )
}

