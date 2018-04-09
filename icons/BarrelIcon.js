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
    <path d="M18,19H19V21H5V19H6V13H5V11H6V5H5V3H19V5H18V11H19V13H18V19M9,13C9,14.66 10.34,16 12,16C13.66,16 15,14.66 15,13C15,11 12,7.63 12,7.63C12,7.63 9,11 9,13Z" />
  </svg>
)
