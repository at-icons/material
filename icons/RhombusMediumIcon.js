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
    <path d="M17.23,11.34L12.68,6.79C12.3,6.4 11.75,6.4 11.36,6.79L6.81,11.34C6.42,11.73 6.42,12.28 6.81,12.66L11.36,17.21C11.75,17.6 12.3,17.6 12.68,17.21L17.23,12.66C17.56,12.27 17.56,11.73 17.23,11.34Z" />
  </svg>
)
