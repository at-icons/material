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
    <path d="M12,3L2,12H5V20H19V12H22L12,3M9,8H13C14.1,8 15,8.9 15,10V12C15,13.1 14.1,14 13,14H11V16H15V18H9V14C9,12.9 9.9,12 11,12H13V10H9V8Z" />
  </svg>
)
