import React from 'react'
import { LargeCard } from './styled'
import styled from 'styled-components'

const Container = styled.div`
  object-fit: scale-down;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  svg {
    width: 600pt;
    height: 800pt;
  }
`

export default function GraphCardPlaceholder({ svg }) {
  const image = JSON.parse(svg)
  return (
    <LargeCard>
      <Container dangerouslySetInnerHTML={{__html: image}} />
    </LargeCard>
  )
}
