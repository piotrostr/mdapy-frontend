import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import ResetButton from './Button/ResetButton'
import HelpButton from './Button/HelpButton'

const HeaderContainer = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  height: 100px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
`

const ButtonsContainer = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: row;
`

const LogoContainer = styled.div`
  margin-left: 30px;
`

const Limitter = styled(HeaderContainer)`
  max-width: 1440px;
  margin: auto;
`

export default function Header({ setState }) {
  return (
    <HeaderContainer>
      <Limitter>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ButtonsContainer>
          <ResetButton setState={setState} />
          <div style={{marginLeft: 25}}>
            <HelpButton />
          </div>
        </ButtonsContainer>
      </Limitter>
    </HeaderContainer>
  )
}

