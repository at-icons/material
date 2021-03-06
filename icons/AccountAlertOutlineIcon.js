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
    <path d="M20,12V7H22V12H20M20,16V14H22V16H20M10,13C12.67,13 18,14.34 18,17V20H2V17C2,14.34 7.33,13 10,13M10,4C12.21,4 14,5.79 14,8C14,10.21 12.21,12 10,12C7.79,12 6,10.21 6,8C6,5.79 7.79,4 10,4M10,14.9C7.03,14.9 3.9,16.36 3.9,17V18.1H16.1V17C16.1,16.36 12.97,14.9 10,14.9M10,5.9C8.84,5.9 7.9,6.84 7.9,8C7.9,9.16 8.84,10.1 10,10.1C11.16,10.1 12.1,9.16 12.1,8C12.1,6.84 11.16,5.9 10,5.9Z" />
  </svg>
)
