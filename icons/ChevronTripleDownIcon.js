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
    <path d="M7.41,14.58L12,19.17L16.59,14.58L18,16L12,22L6,16L7.41,14.58M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58M7.41,2.58L12,7.17L16.59,2.58L18,4L12,10L6,4L7.41,2.58Z" />
  </svg>
)
