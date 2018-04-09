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
    <path d="M6,3H18C19.1,3 20,3.9 20,5V19C20,20.1 19.1,21 18,21H6C4.9,21 4,20.1 4,19V5C4,3.9 4.9,3 6,3M6,5V17H18V5H6Z" />
  </svg>
)
