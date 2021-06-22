import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-select'
import MediumText from '../components/Text/MediumText'
import LightText from '../components/Text/LightText'
import BoldText from '../components/Text/BoldText'
import LoadDataButton from '../components/Button/LoadDataButton'
import { dropdown } from './InputPanel.module.css'

const Card = styled.div`
  width: 420px;
  height: 1019px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 27px 20px 27px;
  margin-right: 19px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 12px;
`

const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #DEE5EF;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 16px 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #73839C;
`

const BigInput = styled(Input)`
  width: 163px;
  height: 40px;
`

const SmallInput = styled(Input)`
  width: 78px;
  height: 40px;
`

const options = [
  {
    value: 'Best Age and sx', 
    label: 'Best Age and sx'
  },
  { 
    value: 'U-Pb 238/206 & Pb-Pb 207/206', 
    label: 'U-Pb 238/206 & Pb-Pb 207/206'
  }
]

export default function InputPanel({ state, setState }) {
  function handleChange(selectedOption) {
    setState({
      dataset: selectedOption.value,
      bestAgeCutOff: 1500,
      primaryDecayConstant: '1.55125*(10**-10)',
      secondaryDecayConstant: '9.8485*(10**-10)',
      thirdDecayConstant: 133.88,
      primaryLongTermVar: 1.2,
      secondaryLongTermVar: 0.7,
      primaryCalibrationUncertainty: 0.6,
      secondaryCalibrationUncertainty: 0.6,
      primaryDecayUncertainty: 0.16,
      secondaryDecayUncertainty: 0.20
    })
  }
  const customStyles = {
    control: (provided, _state) => ({
      ...provided,
      border: state.dataset ? '1px solid #1493A4' : '1px solid #DEE5EF'
    }),
    option: (provided, _state) => ({
      ...provided,
      color: '#73839C',
      backgroundColor: '#FFFFFF' 
    }),
    singleValue: (provided, _state) => ({
      ...provided,
      color: '#73839C'
    })
  }
  return (
    <Card>
      <Row>
        <BoldText>
          Input Data
        </BoldText>
      </Row>
      <Row>
        <MediumText>
          Select dataset
        </MediumText>
      </Row>
      <Row>
        <LightText>
          <Dropdown 
            styles={customStyles}
            className={dropdown} 
            onChange={handleChange} 
            defaultValue={state.dataset} 
            options={options} 
            placeholder=""
          />
        </LightText>
      </Row>
      <Row>
        <MediumText>
          Select Sigma
        </MediumText>
      </Row>
      <Row>
        <MediumText>
          Select Uncertainty Format
        </MediumText>
      </Row>
      <Row>
        <MediumText>
          Best Age Cut Off
        </MediumText>
        <BigInput 
          value={state.bestAgeCutOff} 
          onChange={e => setState({ 
            ...state,
            bestAgeCut: e.target.value 
          })}
          style={state.bestAgeCutOff && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <MediumText>
          U238 Decay Constant
        </MediumText>
        <BigInput 
          value={state.primaryDecayConstant} 
          onChange={e => setState({ 
            ...state, 
            primaryDecayConstant: e.target.value 
          })}
          style={state.primaryDecayConstant && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <MediumText>
          U235 Decay Constant
        </MediumText>
        <BigInput 
          value={state.secondaryDecayConstant} 
          onChange={e => setState({ 
            ...state, 
            secondaryDecayConstant: e.target.value 
          })}
          style={state.secondaryDecayConstant && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <MediumText>
          U238/U235 Decay Constant
        </MediumText>
        <BigInput 
          value={state.thirdDecayConstant} 
          onChange={e => setState({ 
            ...state, 
            thirdDecayConstant: e.target.value 
          })}
          style={state.thirdDecayConstant && { borderColor: '#1493A4' }}
        />
      </Row>
      <LightText>
        Input 0 if systematic uncertainties not required 
        in final uncertainty calculation
      </LightText>
      <Row>
        <LightText>
          Long Term Excess Variance: U-Pb 238/206
        </LightText>
        <SmallInput 
          value={state.primaryLongTermVar}
          onChange={e => setState({
            ...state,
            primaryLongTermVar: e.target.value
          })}
          style={state.primaryLongTermVar && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <LightText>
          Long Term Excess Variance: Pb-Pb 207/206
        </LightText>
        <SmallInput 
          value={state.secondaryLongTermVar}
          onChange={e => setState({
            ...state,
            secondaryLongTermVar: e.target.value
          })}
          style={state.secondaryLongTermVar && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <LightText>
          Sy Calibration Uncertainty U-Pb 238/206
        </LightText>
        <SmallInput 
          value={state.primaryCalibrationUncertainty}
          onChange={e => setState({
            ...state,
            primaryCalibrationUncertainty: e.target.value
          })}
          style={state.primaryCalibrationUncertainty && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <LightText>
          Sy Calibration Uncertainty Pb-Pb 207/206
        </LightText>
        <SmallInput 
          value={state.secondaryCalibrationUncertainty}
          onChange={e => setState({
            ...state,
            secondaryCalibrationUncertainty: e.target.value
          })}
          style={state.secondaryCalibrationUncertainty && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <LightText>
          Decay Constant Uncertainty U 238
        </LightText>
        <SmallInput 
          value={state.primaryDecayUncertainty}
          onChange={e => setState({
            ...state,
            primaryDecayUncertainty: e.target.value
          })}
          style={state.primaryDecayUncertainty && { borderColor: '#1493A4' }}
        />
      </Row>
      <Row>
        <LightText>
          Decay Constant Uncertainty U 235
        </LightText>
        <SmallInput 
          value={state.secondaryDecayUncertainty}
          onChange={e => setState({
            ...state,
            secondaryDecayUncertainty: e.target.value
          })}
          style={state.secondaryDecayUncertainty && { borderColor: '#1493A4' }}
        />
      </Row>
      <div style={{ marginTop: 20 }}>
        <LoadDataButton />
      </div>
    </Card>
  )
}
