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
    <path d="M8,4C5.24,4 3,6.24 3,9V18H1V20H21C22.1,20 23,19.1 23,18V9C23,6.24 20.76,4 18,4H8M8,6C9.66,6 11,7.34 11,9V18H5V9C5,7.34 6.34,6 8,6M13,13V7H17V9H15V13H13Z" />
  </svg>
)
