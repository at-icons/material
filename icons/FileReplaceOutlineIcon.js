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
    <path d="M14,3L12,1H4C2.9,1 2,1.9 2,3V15C2,16.1 2.9,17 4,17H11V19L15,16L11,13V15H4V3H14M21,10V21C21,22.1 20.1,23 19,23H8C6.9,23 6,22.1 6,21V19H8V21H19V12H14V7H8V13H6V7C6,5.9 6.9,5 8,5H16L21,10Z" />
  </svg>
)
