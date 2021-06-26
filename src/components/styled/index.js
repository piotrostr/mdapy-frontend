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
