import React from 'react'

const DEFAULT_SIZE = 24

export const SatelliteIcon = ({
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
    <path d="M5,18L8.5,13.5L11,16.5L14.5,12L19,18M5,12V10C7.76,10 10,7.76 10,5H12C12,8.87 8.87,12 5,12M5,5H8C8,6.66 6.66,8 5,8M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z" />
  </svg>
)
