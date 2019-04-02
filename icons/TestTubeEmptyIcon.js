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
    <path d="M7,2H17V4H16V18C16,20.21 14.21,22 12,22C9.79,22 8,20.21 8,18V4H7V2M14,4H10V18C10,19.1 10.9,20 12,20C13.1,20 14,19.1 14,18V4Z" />
  </svg>
)
