import React from 'react'
import _ from 'lodash'
import Dropdown from 'react-select'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'
import BoldText from './Text/BoldText'
import LoadDataButton from './Button/LoadDataButton'
import ReloadDataButton from './Button/ReloadDataButton'
import { firstDatasetPlaceholder, secondDatasetPlaceholder } from '../data'
import { SelectSigma, SelectUncertainty } from './DotInput'
import { dropdown } from './InputPanel.module.css'
import { 
  InputPanelCard as Card,
  InputPanelRow as Row, 
  Input, 
  BigInput, 
  SmallInput 
} from './styled'


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
  function checkInputComplete(state) {
    if (
      state.dataset 
      && state.sigma
      && state.uncertaintyFormat
      && state.bestAgeCutOff
      && state.primaryDecayConstant
      && state.secondaryDecayConstant
      && state.thirdDecayConstant
      && state.primaryLongTermVar
      && state.secondaryLongTermVar
      && state.primaryCalibrationUncertainty
      && state.secondaryCalibrationUncertainty
      && state.primaryDecayUncertainty
      && state.secondaryDecayUncertainty
    )
      return true
    else 
      return false
  }
  function reloadData() {
    setState(state => ({
      ...state, 
      dataLoaded: false,
      dataSummary: [] 
    }))
  }
  async function loadData() {
    const url = state.urlBase + 'validate'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application-json'
      },
      body: JSON.stringify(state)
    }) 
    const json = await res.json()
    let dataSummary = _.zip(
      Object.values(json.Sample_ID), 
      Object.values(json.Sample_Size)
    ) 
    setState(state => ({
      ...state, 
      dataLoaded: true,
      dataSummary: dataSummary 
    }))
  }
  function handleChange(selectedOption) {
    const columnLabels = selectedOption.value === 'Best Age and sx' 
      ? 
      [ 
        'Sample_ID', 
        'Best_Age',
        'Best_Age_sx'
      ]
      :
      [
        'Sample_ID', 
        '206Pb/238U',
        '206Pb/238U_sx',
        '207Pb/206Pb',
        '207Pb/206Pb_sx'
      ]
    setState({
      ...state,
      dataset: selectedOption.value,
      sigma: '1 sx',
      uncertaintyFormat: 'Percent %',
      bestAgeCutOff: 1500,
      primaryDecayConstant: '1.55125*(10**-10)',
      secondaryDecayConstant: '9.8485*(10**-10)',
      thirdDecayConstant: 133.88,
      primaryLongTermVar: 1.2,
      secondaryLongTermVar: 0.7,
      primaryCalibrationUncertainty: 0.6,
      secondaryCalibrationUncertainty: 0.6,
      primaryDecayUncertainty: 0.16,
      secondaryDecayUncertainty: 0.20,
      table: { 
        data: (
          selectedOption.value === 'Best Age and sx' 
            ? firstDatasetPlaceholder
            : secondDatasetPlaceholder
        ), 
        columnLabels: columnLabels 
      }
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
            value={{ label: state.dataset }}
            onChange={handleChange} 
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
      <SelectSigma state={state} setState={setState} />
      <Row>
        <MediumText>
          Select Uncertainty Format
        </MediumText>
      </Row>
      <SelectUncertainty state={state} setState={setState} />
      <Row>
        <MediumText>
          Best Age Cut Off
        </MediumText>
        <BigInput 
          value={
            state.bestAgeCutOff 
              ? state.bestAgeCutOff 
              : ''
          }
          onChange={e => setState({ 
            ...state,
            bestAgeCutOff: e.target.value 
          })}
          style={
            state.bestAgeCutOff 
              ? { borderColor: '#1493A4' } 
              : {}
          }
        />
      </Row>
      <Row>
        <MediumText>
          U238 Decay Constant
        </MediumText>
        <BigInput 
          value={
            state.primaryDecayConstant 
              ? state.primaryDecayConstant 
              : ''
          }
          onChange={e => setState({ 
            ...state, 
            primaryDecayConstant: e.target.value 
          })}
          style={
            state.primaryDecayConstant 
              ? { borderColor: '#1493A4' } 
              : {}
          }
        />
      </Row>
      <Row>
        <MediumText>
          U235 Decay Constant
        </MediumText>
        <BigInput 
          value={
            state.secondaryDecayConstant 
              ? state.secondaryDecayConstant 
              : ''
          }
          onChange={e => setState({ 
            ...state, 
            secondaryDecayConstant: e.target.value 
          })}
          style={
            state.secondaryDecayConstant 
              ? { borderColor: '#1493A4' } 
              : {}
          }
        />
      </Row>
      <Row>
        <MediumText>
          U238/U235 Decay Constant
        </MediumText>
        <BigInput 
          value={
            state.thirdDecayConstant 
              ? state.thirdDecayConstant 
              : ''
          }
          onChange={e => setState({ 
            ...state, 
            thirdDecayConstant: e.target.value 
          })}
          style={
            state.thirdDecayConstant 
              ? { borderColor: '#1493A4' }
              : {}
          }
        />
      </Row>
      <div style={{ marginTop: 30, marginBottom: 18 }}>
        <LightText>
          Input 0 if systematic uncertainties not required 
          in final uncertainty calculation
        </LightText>
      </div>
      <Row>
        <LightText>
          Long Term Excess Variance: U-Pb 238/206
        </LightText>
        <SmallInput 
          value={
            state.primaryLongTermVar 
              ? state.primaryLongTermVar 
              : ''
          }
          onChange={e => setState({
            ...state,
            primaryLongTermVar: e.target.value
          })}
          style={
            state.primaryLongTermVar 
              ? { borderColor: '#1493A4' }
              : {}
          }
        />
      </Row>
      <Row>
        <LightText>
          Long Term Excess Variance: Pb-Pb 207/206
        </LightText>
        <SmallInput 
          value={
            state.secondaryLongTermVar 
              ? state.secondaryLongTermVar 
              : ''
          }
          onChange={e => setState({
            ...state,
            secondaryLongTermVar: e.target.value
          })}
          style={
            state.secondaryLongTermVar 
              ? { borderColor: '#1493A4' }
              : {}
          }
        />
      </Row>
      <Row>
        <LightText>
          Sy Calibration Uncertainty U-Pb 238/206
        </LightText>
        <SmallInput 
          value={
            state.primaryCalibrationUncertainty 
              ? state.primaryCalibrationUncertainty 
              : ''
          }
          onChange={e => setState({
            ...state,
            primaryCalibrationUncertainty: e.target.value
          })}
          style={
            state.primaryCalibrationUncertainty 
              ? { borderColor: '#1493A4' }
              : {}
          }
        />
      </Row>
      <Row>
        <LightText>
          Sy Calibration Uncertainty Pb-Pb 207/206
        </LightText>
        <SmallInput 
          value={
            state.secondaryCalibrationUncertainty 
              ? state.secondaryCalibrationUncertainty 
              : ''
          }
          onChange={e => setState({
            ...state,
            secondaryCalibrationUncertainty: e.target.value
          })}
          style={
            state.secondaryCalibrationUncertainty 
              ? { borderColor: '#1493A4' }
              : {}
          }
        />
      </Row>
      <Row>
        <LightText>
          Decay Constant Uncertainty U 238
        </LightText>
        <SmallInput 
          value={
            state.primaryDecayUncertainty 
              ? state.primaryDecayUncertainty 
              : ''
          }
          onChange={e => setState({
            ...state,
            primaryDecayUncertainty: e.target.value
          })}
          style={
            state.primaryDecayUncertainty 
              ? { borderColor: '#1493A4' }
              : {}
          }
        />
      </Row>
      <Row>
        <LightText>
          Decay Constant Uncertainty U 235
        </LightText>
        <SmallInput 
          value={
            state.secondaryDecayUncertainty 
              ? state.secondaryDecayUncertainty 
              : ''
          }
          onChange={e => setState({
            ...state,
            secondaryDecayUncertainty: e.target.value
          })}
          style={
            state.secondaryDecayUncertainty 
              ? { borderColor: '#1493A4' }
              : {}
          }
        />
      </Row>
      <div style={{ marginTop: 20 }}>
        {
          !state.dataLoaded 
            ? (
              checkInputComplete(state)
                ? <LoadDataButton onClick={loadData} /> 
                : <LoadDataButton onClick={() => null} /> 
            )
          : <ReloadDataButton onClick={reloadData} />
        }
      </div>
    </Card>
  )
}
