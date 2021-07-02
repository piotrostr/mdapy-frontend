import React from 'react'
import styled from 'styled-components'
import BoldText from './Text/BoldText'
import LightText from './Text/LightText'

const TableCard = styled.div`
  width: 930px;
  height: 275px;
  background: #ffffff;
  margin-bottom: 25px;
`

const Table = styled.div`
  width: 100%;
  height: 700px;
  overflow-x: auto;
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
  width: 145px;
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
  // TODO add keys so react dont complain
  return (
    <TableCard>
      <Table>
        <Header>
          {
            data.header.map((val, key) => 
              <BoldText>
                <HeaderEntry key={key}>
                  {val}
                </HeaderEntry>
              </BoldText>
            )
          }
        </Header>
        {
          Object.values(data.body).map(
            (row, key) => 
              <Row key={key}>
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
    </TableCard>
  )
}

