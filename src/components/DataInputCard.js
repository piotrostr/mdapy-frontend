import React, { useState, useEffect } from 'react'
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
  return (
    <Card>
      <ScrollContainer>
        <Spreadsheet 
          data={state.table.data} 
          onChange={change => setState({ 
            ...state,
            table: {
              ...state.table,
              data: change
            }
          })}
          columnLabels={state.table.columnLabels}
        />
      </ScrollContainer>
    </Card>
  )
}
