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
    <path d="M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M8,18H12V14H8V18Z" />
  </svg>
)
