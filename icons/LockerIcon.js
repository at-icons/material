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
    <path d="M8,2H16C17.1,2 18,2.9 18,4V20C18,21.1 17.1,22 16,22H8C6.9,22 6,21.1 6,20V4C6,2.9 6.9,2 8,2M8,4V20H16V4H8M10,13H12V17H10V13M10,6H14V7.5H10V6M10,9H14V10.5H10V9Z" />
  </svg>
)
