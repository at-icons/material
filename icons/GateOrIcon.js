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
    <path d="M2,4C5,10 5,14 2,20H8C13,20 19,16 22,12C19,8 13,4 8,4H2M5,6H8C11.5,6 16.3,9 19.3,12C16.3,15 11.5,18 8,18H5C6.4,13.9 6.4,10.1 5,6Z" />
  </svg>
)
