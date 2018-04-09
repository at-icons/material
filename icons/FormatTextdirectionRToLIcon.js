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
    <path d="M8,17V14L4,18L8,22V19H20V17M10,10V15H12V4H14V15H16V4H18V2H10C7.79,2 6,3.79 6,6C6,8.21 7.79,10 10,10Z" />
  </svg>
)
