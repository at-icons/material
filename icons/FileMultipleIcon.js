import React from 'react'

const DEFAULT_SIZE = 24

export const FileMultipleIcon = ({
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
    <path d="M15,7H20.5L15,1.5V7M8,0H16L22,6V18C22,19.1 21.1,20 20,20H8C6.89,20 6,19.1 6,18V2C6,0.9 6.9,0 8,0M4,4V22H20V24H4C2.9,24 2,23.1 2,22V4H4Z" />
  </svg>
)
