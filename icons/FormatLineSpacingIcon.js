import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M10,13H22V11H10M10,19H22V17H10M10,7H22V5H10M6,7H8.5L5,3.5L1.5,7H4V17H1.5L5,20.5L8.5,17H6V7Z" />
  </svg>
)
