import styled, { createGlobalStyle } from 'styled-components'
import MediumText from '../Text/MediumText'

export const theme = {
  teal: '#1493A4',
  gray: '#B7B7B7',
  fireOrange: '#293854',
  darkerGray: '#73839C',
  lightGray: '#F8F8F9',
  text: '#293854',
  stroke: '#DEE5EF'
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.stroke};
    padding: 0;
    margin: 0;
  }
  html {
    padding: 0;
    margin: 0;
  }
`

export const Page = styled.div`
  width: 100%;
  height: 180vh;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const BodyContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  padding-top: 25px;
  flex-direction: row;
  justify-content: center;
`

export const LargeCard = styled.div`
  width: 930px;
  height: 584px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Centered = styled.div`
  width: 305px;
  text-align: center;
  margin-top: 30px;
`

export const SmallCard = styled.div`
  width: 290px;
  height: 270px;
  background-color: #FFFFFF;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`

export const SmallCardHeader = styled(MediumText)`
  position: relative;
  left: 20px;
  top: 11px;
  margin-bottom: 30px;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const InputPanelCard = styled.div`
  width: 420px;
  height: 1019px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 27px 20px 27px;
  margin-right: 19px;
`

export const InputPanelRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 12px;
`

export const Input = styled.input`
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

export const BigInput = styled(Input)`
  width: 163px;
  height: 40px;
`

export const SmallInput = styled(Input)`
  width: 78px;
  height: 40px;
`

export const TableCard = styled.div`
  width: 930px;
  height: 275px;
  background: #ffffff;
  margin-bottom: 25px;
  padding-top: 28px;
`

