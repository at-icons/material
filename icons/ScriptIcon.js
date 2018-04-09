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
    <path d="M14,20C15.1,20 16,19.1 16,18V5H9C8.45,5 8,5.45 8,6V16H5V5C5,3.34 6.34,2 8,2H19C20.66,2 22,3.34 22,5V6H18V18L18,19C18,20.66 16.66,22 15,22H5C3.34,22 2,20.66 2,19V18H12C12,19.1 12.9,20 14,20Z" />
  </svg>
)
