import * as React from "react"
import Header from '../components/Header'
import styled, { ThemeProvider } from 'styled-components'

const Page = styled.div`
  width: 100%;
  height: 100%;
`

const theme = {
  teal: '#1493A4',
  gray: '#B7B7B7',
  fireOrange: '#293854',
  darkerGray: '#73839C',
  lightGray: '#F8F8F9',
  text: '#293854',
  stroke: '#DEE5EF'
}

export default function () {
  return (
    <Page>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </Page>
  )
}

