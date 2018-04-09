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
    <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13C4,15.21 5.79,17 8,17H14C16.21,17 18,15.21 18,13V10H20C21.1,10 22,9.1 22,8V5C22,3.89 21.1,3 20,3Z" />
  </svg>
)
