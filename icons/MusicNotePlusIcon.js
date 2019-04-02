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
    <path d="M9,3V12.26C8.5,12.09 8,12 7.5,12C5,12 3,14 3,16.5C3,19 5,21 7.5,21C10,21 12,19 12,16.5V6H16V3H9M17,9V12H14V14H17V17H19V14H22V12H19V9H17Z" />
  </svg>
)
