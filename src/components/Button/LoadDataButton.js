import React from 'react'
import styled from 'styled-components'
import ButtonText from '../Text/ButtonText'

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 49px;
  background: ${props => props.theme.teal};
  border-radius: 4px;
`

export default function LoadDataButton({ onClick }) {
  return (
    <ButtonText style={{ fontSize: 14 }}>
      <Button onClick={onClick}>
        Load Data
      </Button>
    </ButtonText>
  )
}
