import React from 'react'

const DEFAULT_SIZE = 24

export const FormatPilcrowIcon = ({
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
    <path d="M10,11C7.79,11 6,9.21 6,7C6,4.79 7.79,3 10,3H18V5H16V21H14V5H12V21H10V11Z" />
  </svg>
)
