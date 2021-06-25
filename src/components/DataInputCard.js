import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Card } from './GraphCardPlaceholder'
import Spreadsheet from 'react-spreadsheet'

const ScrollContainer = styled.div`
  margin: 50px 50px 50px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`

export default function DataInputCard({ state, setState }) {
  const data = [
      [{ value: "Vanilla" }, { value: "Chocolate" }],
      [{ value: "Strawberry" }, { value: "Cookies" }],
  ]
  const columnLabels = ['first', 'second']

  function onChange(change) {
    setState({ ...state, table: { change } })
  }

  // TODO: 
  //  after the onChange is added paste no longer works :/
  //  add scrolling and a fading gradient so it looks nice

  useEffect(() => console.log(data), [data])

  return (
    <Card>
      <ScrollContainer>
        <Spreadsheet 
          data={data} 
          columnLabels={columnLabels}
        />
      </ScrollContainer>
    </Card>
  )
}
