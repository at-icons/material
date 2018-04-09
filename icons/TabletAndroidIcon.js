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
    <path d="M19.25,19H4.75V3H19.25M14,22H10V21H14M18,0H6C4.34,0 3,1.34 3,3V21C3,22.66 4.34,24 6,24H18C19.66,24 21,22.66 21,21V3C21,1.34 19.66,0 18,0Z" />
  </svg>
)
