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
    <path d="M12,3H15V15H19V18H14.72C14.1,19.74 12.46,21 10.5,21C8.54,21 6.9,19.74 6.28,18H3V15H6.28C6.9,13.26 8.54,12 10.5,12C11,12 11.5,12.09 12,12.26V3Z" />
  </svg>
)
