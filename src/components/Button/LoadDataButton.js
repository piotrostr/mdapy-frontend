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
  user-select: none;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    transition: 0.25s ease-in-out;
  }
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
