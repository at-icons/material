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
    <path d="M20,6H10V12H8V4H14V0H6V6H4C2.9,6 2,6.9 2,8V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V8C22,6.9 21.1,6 20,6Z" />
  </svg>
)
