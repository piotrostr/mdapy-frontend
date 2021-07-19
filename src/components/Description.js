import React from 'react'
import styled from 'styled-components'
import { getDescription, getTitle } from '../data'
import MediumText from './Text/MediumText'
import LightText from './Text/LightText'

const Container = styled.div`
  width: 940px;
  margin-bottom: 10px;
`

export default function Description({ method }) {
  console.log(method)
  const title = getTitle(method)
  const description = getDescription(method)
  return (
    <Container>
      <MediumText>
        {title}
      </MediumText>
      <LightText>
        {description}
      </LightText>
    </Container>
  )
}
