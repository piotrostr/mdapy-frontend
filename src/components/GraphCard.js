import React from 'react'
import { LargeCard } from './styled'
import styled from 'styled-components'

const Container = styled.div`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
`

export default function GraphCardPlaceholder({ svg }) {
  const image = JSON.parse(svg)
  return (
    <LargeCard>
      <Container dangerouslySetInnerHTML={{__html: image}} />
    </LargeCard>
  )
}
