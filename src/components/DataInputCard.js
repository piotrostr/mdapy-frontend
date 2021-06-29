import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LargeCard } from './styled'
import Spreadsheet from 'react-spreadsheet'

const ScrollContainer = styled.div`
  margin: 50px 50px 50px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`

export default function DataInputCard({ state, setState }) {
  return (
    <LargeCard>
      <ScrollContainer>
        <Spreadsheet 
          data={state.table.data} 
          onChange={change => setState(_state => ({ 
            ..._state,
            table: {
              ..._state.table,
              data: change
            }
          }))}
          columnLabels={state.table.columnLabels}
        />
      </ScrollContainer>
    </LargeCard>
  )
}
