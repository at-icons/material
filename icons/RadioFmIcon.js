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
    <path d="M3,7V17H5V13H8V11H5V9H9V7H3M13,7C11.9,7 11,7.9 11,9V17H13V9H15V16H17V9H19V17H21V9C21,7.9 20.1,7 19,7H13Z" />
  </svg>
)
