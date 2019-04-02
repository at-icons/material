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
    <path d="M12,3L2,12H5V20H19V12H22L12,3M9,8H13C14.1,8 15,8.9 15,10V11.5C15,12.33 14.33,13 13.5,13C14.33,13 15,13.67 15,14.5V16C15,17.1 14.1,18 13,18H9V8M11,10V12H13V10H11M11,14V16H13V14H11Z" />
  </svg>
)
