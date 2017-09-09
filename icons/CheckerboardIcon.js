import React from 'react'

const DEFAULT_SIZE = 24

export const CheckerboardIcon = ({
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
    <path d="M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z" />
  </svg>
)
