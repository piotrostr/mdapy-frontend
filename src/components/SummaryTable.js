import React from 'react'
import styled from 'styled-components'
import { Row } from './styled'

const TableCard = styled.div`
  width: 930px;
  height: 275px;
`

const Table = styled.div`
  width: 100%;
  height: 700px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 25px;
`

const Header = styled(Row)`
  margin-bottom: 5px;
  border-bottom: 1px solid #DEE5EF;
`

const Entry = styled.div`
  width: 55px;
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
`

function convertData(tableData) {
  const data = {}
  for (let key of Object.keys(Object.values(tableData)[0]))
    data[key] = []
  data.header = Object.keys(tableData)
  for (dict of Object.values(tableData)) {
    for (key in dict) {
      data[key].push(dict[key]) 
    }
  }
  return data
}

export default function SummaryTable({ tableData }) {
  const data = convertData(tableData)
  <TableCard>
    <Table>
    </Table>
  </TableCard>
}

