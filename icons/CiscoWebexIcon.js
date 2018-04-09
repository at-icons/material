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
    <path d="M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M5.94,8.5C4,11.85 5.15,16.13 8.5,18.06C11.85,20 18.85,7.87 15.5,5.94C12.15,4 7.87,5.15 5.94,8.5Z" />
  </svg>
)
