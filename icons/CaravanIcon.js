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
    <path d="M5,7C3.9,7 3,7.9 3,9V15C3,16.1 3.9,17 5,17H7C7,18.66 8.34,20 10,20C11.66,20 13,18.66 13,17H21V15H19V9C19,7.9 18.1,7 17,7H5M5,9H10V12H5V9M13,9H17V12H13V9M10,16C10.55,16 11,16.45 11,17C11,17.55 10.55,18 10,18C9.45,18 9,17.55 9,17C9,16.45 9.45,16 10,16Z" />
  </svg>
)
