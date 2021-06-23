import React from 'react'
import { Card } from './GraphCardPlaceholder'
import { HotTable } from '@handsontable/react'
import Handsontable from 'handsontable'

export default class DataInputCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.state)
    return (
      <Card>
        # todo
      </Card>
    )
  }
}

