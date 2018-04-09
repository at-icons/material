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
    <path d="M19,4C20.11,4 21,4.9 21,6V18C21,19.1 20.1,20 19,20H5C3.89,20 3,19.1 3,18V6C3,4.9 3.9,4 5,4H19M19,18V8H5V18H19Z" />
  </svg>
)
