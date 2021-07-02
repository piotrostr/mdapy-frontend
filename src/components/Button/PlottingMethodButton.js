import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Button = styled.div`
  width: 290px;
  height: 63px;
  background: #FFFFFF;
  border: 1px solid #1493A4;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1493A4;
  display: flex;
  flex-direction: row;
  padding: 9.5px 21px 9.5px;
  align-items: center;
  user-select: none;
  &:hover {
    border: 2px solid #1493A4;
    padding: 8.5px 20px 8.5px;
  }
`

export default function PlottingMethodButton({ text, onClick }) {
  return (
    <Button onClick={onClick}>
      <div style={{ width: 165 }}>
        {text}
      </div>
      <StaticImage 
        src="../../images/plus.svg"
        alt="logo"
        layout="fixed"
        width={12}
        height={12}
        style={{ marginLeft: 17 }}
      />
    </Button>
  )
}
