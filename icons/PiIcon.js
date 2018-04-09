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
    <path d="M4,5V7H6V19H8V7H14V16C14,17.66 15.34,19 17,19C18.66,19 20,17.66 20,16H18C18,16.55 17.55,17 17,17C16.45,17 16,16.55 16,16V7H18V5" />
  </svg>
)
