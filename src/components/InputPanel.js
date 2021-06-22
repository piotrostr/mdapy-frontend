import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-select'
import MediumText from '../components/Text/MediumText'
import LightText from '../components/Text/LightText'
import BoldText from '../components/Text/BoldText'
import { dropdown } from './InputPanel.module.css'

const Card = styled.div`
  width: 420px;
  height: 1319px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 27px 20px 27px;
  margin-right: 19px;
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
  margin-bottom: 12px;
`

const BigInput = styled(Input)`
  width: 163px;
  height: 40px;
`

const SmallInput = styled(Input)`
  width: 78px;
  height: 40px;
`

export default function InputPanel({ state, setState }) {
  function handleChange(selectedOption) {
    setState({ ...state, dataset: selectedOption.value })
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
      <BoldText>
        Input Data
      </BoldText>
      <MediumText>
        Select dataset
      </MediumText>
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
      <MediumText>
        Select Sigma
      </MediumText>
      <MediumText>
        Select Uncertainty Format
      </MediumText>
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
        />
      </Row>
      <Row>
        <MediumText>
          U238 Decay Constant
        </MediumText>
        <BigInput 
          value={state.primaryDecoyConstant} 
          onChange={e => setState({ 
            ...state, 
            primaryDecoyConstant: e.target.value 
          })}
        />
      </Row>
      <Row>
        <MediumText>
          U238 Decay Constant
        </MediumText>
        <BigInput 
          value={state.secondaryDecoyConstant} 
          onChange={e => setState({ 
            ...state, 
            secondaryDecoyConstant: e.target.value 
          })}
        />
      </Row>
      <Row>
        <MediumText>
          U238/U235 Decay Constant
        </MediumText>
        <BigInput 
          value={state.thirdDecoyConstant} 
          onChange={e => setState({ 
            ...state, 
            thirdDecoyConstant: e.target.value 
          })}
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
        />
      </Row>
    </Card>
  )
}
