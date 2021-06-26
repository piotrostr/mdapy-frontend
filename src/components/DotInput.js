import React from 'react'
import styled from 'styled-components'
import LightText from './Text/LightText'

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: transparent;
  border: 1px solid #DEE5EF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
  justify-content: flex-start;
`

export const ShortRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  width: 134px;
  margin-right: 16px;
`

export const Fill = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #293854;
`

export function SelectSigma({ state, setState }) {
  return (
    <Row>
      <ShortRow 
        onClick={
          state.sigma !== '1 sx' 
            ? () => setState({ ...state, sigma: '1 sx' }) 
            : () => null 
        }
      >
        <Circle>
          { 
            state.sigma === '1 sx' && <Fill />
          }
        </Circle>
        <LightText>
          1 sx
        </LightText>
      </ShortRow>
      <ShortRow 
        onClick={
          state.sigma !== '2 sx' 
            ? () => setState({ ...state, sigma: '2 sx' }) 
            : () => null 
        }
      >
        <Circle>
          { 
            state.sigma === '2 sx' && <Fill />
          }
        </Circle>
        <LightText>
          2 sx
        </LightText>
      </ShortRow>
    </Row>
  )
}

export function SelectUncertainty({ state, setState }) {
  return (
    <Row>
      <ShortRow 
        onClick={
          state.uncertaintyFormat !== 'Percent %' 
            ? () => setState({ ...state, uncertaintyFormat: 'Percent %' }) 
            : () => null 
        }
      >
        <Circle>
          { 
            state.uncertaintyFormat === 'Percent %' && <Fill />
          }
        </Circle>
        <LightText>
          Percent %
        </LightText>
      </ShortRow>
      <ShortRow 
        onClick={
          state.uncertaintyFormat !== 'Absolute (ABS)' 
            ? () => setState({ ...state, uncertaintyFormat: 'Absolute (ABS)' }) 
            : () => null 
        }
      >
        <Circle>
          { 
            state.uncertaintyFormat === 'Absolute (ABS)' && <Fill />
          }
        </Circle>
        <LightText>
          Absolute (ABS)
        </LightText>
      </ShortRow>
    </Row>
  )
}
