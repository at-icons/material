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
    <path d="M15,3H12V5H15V21H5V5H8V3H5C3.9,3 3,3.9 3,5V21C3,22.1 3.9,23 5,23H15C16.1,23 17,22.1 17,21V5C17,3.9 16.1,3 15,3M10,7C11.1,7 12,7.9 12,9C12,10.1 11.1,11 10,11C8.9,11 8,10.1 8,9C8,7.9 8.9,7 10,7M14,15H6V14C6,12.67 8.67,12 10,12C11.33,12 14,12.67 14,14V15M14,18H6V17H14V18M10,20H6V19H10V20M11,5H9V1H11V5M19,12V7H21V12H19M19,16V14H21V16H19Z" />
  </svg>
)
