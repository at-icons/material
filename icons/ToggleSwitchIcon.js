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
    <path d="M17,7C19.76,7 22,9.24 22,12C22,14.76 19.76,17 17,17C14.24,17 12,14.76 12,12C12,9.24 14.24,7 17,7M4,14C2.9,14 2,13.1 2,12C2,10.9 2.9,10 4,10H10V14H4Z" />
  </svg>
)
