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
    <path d="M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14C4.69,14 2,11.31 2,8C2,4.69 4.69,2 8,2C11.31,2 14,4.69 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5C5.9,5 5,5.9 5,7C5,8.1 5.9,9 7,9C8.1,9 9,8.1 9,7C9,5.9 8.1,5 7,5Z" />
  </svg>
)
