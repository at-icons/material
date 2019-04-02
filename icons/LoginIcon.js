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
    <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19C20.1,2 21,2.9 21,4V20C21,21.1 20.1,22 19,22H10C8.9,22 8,21.1 8,20V18H10V20H19V4H10V6H8V4C8,2.9 8.9,2 10,2Z" />
  </svg>
)
