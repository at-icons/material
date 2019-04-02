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
    <path d="M5,9H9V11H5V9M22,9V18C22,19.1 21.1,20 20,20H2V9C2,6.24 4.24,4 7,4H17C19.76,4 22,6.24 22,9M10,9C10,7.34 8.66,6 7,6C5.34,6 4,7.34 4,9V18H10V9M16,7H12V13H14V9H16V7Z" />
  </svg>
)
