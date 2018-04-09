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
    <path d="M3,11H21V13H15V19H21V21H15C13.9,21 13,20.1 13,19V13H10.35L5.73,21L4,20L8.04,13H3V11M5,3H19V5H5V3Z" />
  </svg>
)
