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
    <path d="M12,3C10.34,3 9,4.34 9,6C9,9 14,13 6,13C4.9,13 4,13.9 4,15V17H20V15C20,13.9 19.1,13 18,13C10,13 15,9 15,6C15,4 13.66,3 12,3M6,19V21H18V19H6Z" />
  </svg>
)
