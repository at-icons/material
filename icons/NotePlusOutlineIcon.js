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
    <path d="M15,10H20.5L15,4.5V10M4,3H16L22,9V19C22,20.1 21.1,21 20,21H4C2.89,21 2,20.1 2,19V5C2,3.89 2.89,3 4,3M4,5V19H20V12H13V5H4M8,17V15H6V13H8V11H10V13H12V15H10V17H8Z" />
  </svg>
)
