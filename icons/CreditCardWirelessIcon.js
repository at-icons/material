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
    <path d="M18,11H6C4.9,11 4,11.9 4,13V21C4,22.1 4.9,23 6,23H18C19.1,23 20,22.1 20,21V13C20,11.9 19.1,11 18,11M18,21H6V17H18V21M18,15H6V13H18V15M4.93,4.92L6.34,6.33C9.46,3.2 14.53,3.2 17.66,6.33L19.07,4.92C15.17,1 8.84,1 4.93,4.92M7.76,7.75L9.17,9.16C10.73,7.6 13.26,7.6 14.83,9.16L16.24,7.75C13.9,5.41 10.1,5.41 7.76,7.75Z" />
  </svg>
)
