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
    <path d="M3,4C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H14V18H3V8.37L11,13.36L19,8.37V13H21V6C21,4.9 20.1,4 19,4H3M3,6H19L11,11L3,6M19,15V18H16V20H19V23H21V20H24V18H21V15H19Z" />
  </svg>
)
