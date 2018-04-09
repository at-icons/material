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
    <path d="M18,18H6V6H18M18,4H6C4.9,4 4,4.9 4,6V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18V6C20,4.89 19.1,4 18,4Z" />
  </svg>
)
