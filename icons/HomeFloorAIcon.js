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
    <path d="M12,3L2,12H5V20H19V12H22L12,3M11,8H13C14.1,8 15,8.9 15,10V18H13V15H11V18H9V10C9,8.89 9.9,8 11,8M11,10V13H13V10H11Z" />
  </svg>
)
