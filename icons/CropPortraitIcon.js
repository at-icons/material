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
    <path d="M17,19H7V5H17M17,3H7C5.9,3 5,3.9 5,5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V5C19,3.89 18.1,3 17,3Z" />
  </svg>
)
