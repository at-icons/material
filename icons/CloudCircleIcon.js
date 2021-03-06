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
    <path d="M16.5,16H8C6.34,16 5,14.66 5,13C5,11.34 6.34,10 8,10C8.05,10 8.09,10 8.14,10C8.58,8.28 10.13,7 12,7C14.21,7 16,8.79 16,11H16.5C17.88,11 19,12.12 19,13.5C19,14.88 17.88,16 16.5,16M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z" />
  </svg>
)
