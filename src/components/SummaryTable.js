import React from 'react'
import styled from 'styled-components'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'

const Table = styled.div`
  width: 100%;
  height: 700px;
  overflow-x: auto;
  overflow-y: auto;
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
  margin-bottom: 15px;
  border-bottom: 1px solid #DEE5EF;
  height: 40px;
`

const Entry = styled.div`
  width: 135px;
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;
`

const HeaderEntry = styled(Entry)`
`

function convertData(tableData) {
  const data = {header: [], body: {}}
  for (let key of Object.keys(Object.values(tableData)[0]))
    data.body[key] = []
  data.header = Object.keys(tableData)
  for (let dict of Object.values(tableData)) {
    for (let key in dict) {
      data.body[key].push(dict[key]) 
    }
  }
  return data
}

export default function SummaryTable({ tableData }) {
  const data = convertData(tableData)
  console.log(data)
  return (
    <Table>
      <Header>
        {
          data.header.map((val, key) => 
            <MediumText>
              <HeaderEntry key={key}>
                {val.replaceAll(
                  "$" + String.fromCharCode(92)+ "sigma$",
                  'σ'
                )}
              </HeaderEntry>
            </MediumText>
          )
        }
      </Header>
      {
        Object.values(data.body).map(
          (row, key) => 
            <Row 
              key={key} 
              style={
                !(key % 2 == 0)
                  ? { background: '#F8F8F9' } 
                  : {}
              }
            >
              {
                row.map(
                  (value, key) => 
                    <LightText>
                      <Entry key={key}>
                        {value}
                      </Entry>
                    </LightText>
                )
              }
            </Row>
        )
      }
    </Table>
  )
}

