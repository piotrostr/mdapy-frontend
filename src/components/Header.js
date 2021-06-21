import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import ResetButton from './ResetButton'
import HelpButton from './HelpButton'

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 5px 20px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function () {
  return (
    <Header>
      <Logo />
      <ResetButton />
      <HelpButton />
    </Header>
  )
}

