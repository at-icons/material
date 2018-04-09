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
    <path d="M8,0L7.17,5H7C5.9,5 5,5.9 5,7V17C5,18.11 5.9,19 7,19H7.17L8,24H16L16.83,19H17C18.1,19 19,18.1 19,17V7C19,5.89 18.1,5 17,5H16.83L16,0H8M7,7H17V17H7V7Z" />
  </svg>
)
