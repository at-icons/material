import React from 'react'

const DEFAULT_SIZE = 24

export const CurrencyTryIcon = ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M19,12C19,16.97 14.97,21 10,21H8V12.77L5,13.87V11.74L8,10.64V8.87L5,9.96V7.84L8,6.74V3H10V6L15,4.2V6.32L10,8.14V9.92L15,8.1V10.23L10,12.05V19C13.87,19 17,15.87 17,12H19Z" />
  </svg>
)
