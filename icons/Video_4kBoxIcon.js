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
    <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M18.09,15L16.08,12L18.09,9H16.36L14.39,12V9H12.89V15H14.39V12L16.36,15H18.09M11.86,13.5V12H10.88V9H9.38V12H7.88V9H6.38V13.5H9.38V15H10.88V13.5H11.86Z" />
  </svg>
)
