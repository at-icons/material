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
    <path d="M19,17H5V7H19M19,5H5C3.9,5 3,5.9 3,7V17C3,18.1 3.9,19 5,19H19C20.1,19 21,18.1 21,17V7C21,5.89 20.1,5 19,5Z" />
  </svg>
)
