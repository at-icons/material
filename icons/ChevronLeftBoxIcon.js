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
    <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.9 20.1,3 19,3M15.71,16.59L14.29,18L8.29,12L14.29,6L15.71,7.41L11.12,12L15.71,16.59Z" />
  </svg>
)
