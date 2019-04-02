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
    <path d="M17,4H7C4.24,4 2,6.24 2,9V20H20C21.1,20 22,19.1 22,18V9C22,6.24 19.76,4 17,4M10,18H4V9C4,7.34 5.34,6 7,6C8.66,6 10,7.34 10,9V18M19,15H17V13H13V11H19V15M9,11H5V9H9V11Z" />
  </svg>
)
