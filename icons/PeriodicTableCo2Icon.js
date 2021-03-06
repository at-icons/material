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
    <path d="M5,7C3.9,7 3,7.9 3,9V15C3,16.1 3.9,17 5,17H8V15H5V9H8V7H5M11,7C9.9,7 9,7.9 9,9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H11M11,9H13V15H11V9M16,10.5V12H19V13.5H17.5C16.67,13.5 16,14.17 16,15V18H20.5V16.5H17.5V15H19C19.83,15 20.5,14.33 20.5,13.5V12C20.5,11.17 19.83,10.5 19,10.5H16Z" />
  </svg>
)
