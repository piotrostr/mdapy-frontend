import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-select'
import MediumText from '../components/Text/MediumText'
import LightText from '../components/Text/MediumText'
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


export default function InputPanel({ state, setState }) {
  function handleChange(selectedOption) {
    setState({ ...state, dataset: selectedOption.value })
  }
  const customStyles = {
    control: (provided, _state) => ({
      ...provided,
      border: state.dataset ? '1px solid #1493A4' : '1px solid #DEE5EF'
    }),
  }
  return (
    <Card>
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
    </Card>
  )
}
