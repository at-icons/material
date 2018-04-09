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
    <path d="M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3C1.9,4 1,4.9 1,6V19C1,20.1 1.9,21 3,21H21C22.1,21 23,20.1 23,19V6C23,4.9 22.1,4 21,4M21,19H12V6H21" />
  </svg>
)
