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
    <path d="M21,17V5H3V17H21M21,3C22.1,3 23,3.9 23,5V17C23,18.1 22.1,19 21,19H16V21H8V19H3C1.9,19 1,18.1 1,17V5C1,3.9 1.9,3 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z" />
  </svg>
)
