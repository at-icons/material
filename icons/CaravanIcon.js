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
    <path d="M4,4C2.9,4 2,4.9 2,6V17H4C4,18.66 5.34,20 7,20C8.66,20 10,18.66 10,17H22V15H19V6C19,4.9 18.1,4 17,4H4M5,9H9V12H5V9M12,9H16V15H12V9M7,16C7.55,16 8,16.45 8,17C8,17.55 7.55,18 7,18C6.45,18 6,17.55 6,17C6,16.45 6.45,16 7,16Z" />
  </svg>
)
