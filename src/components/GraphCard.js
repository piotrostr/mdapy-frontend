import React from 'react'
import { LargeCard } from './styled'
import BoldText from './Text/BoldText'
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

const SingleContainer = styled(Container)`
  svg {
    width: auto;
    height: auto;
  }
`

const TitleText = styled(BoldText)`
  top: 18px;
  left: 13px;
  position: relative;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-left: 8px;
`

export default function GraphCard({ svg, title, single }) {
  // there have to be multiple svgs here ?
  const image = JSON.parse(svg)
  return (
    <LargeCard>
      <TitleText>
        {title}
      </TitleText>
      {
        single 
          ? <SingleContainer dangerouslySetInnerHTML={{
              __html: image
          }} />
          : <Container dangerouslySetInnerHTML={{
            __html: image
          }} />
      }
    </LargeCard>
  )
}
