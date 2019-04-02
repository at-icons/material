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
    <path d="M10,14C8.89,14 8,13.1 8,12C8,10.89 8.89,10 10,10C11.1,10 12,10.9 12,12C12,13.1 11.1,14 10,14M10,4C5.58,4 2,7.58 2,12C2,16.42 5.58,20 10,20C14.42,20 18,16.42 18,12C18,7.58 14.42,4 10,4M20,12H22V7H20M20,16H22V14H20V16Z" />
  </svg>
)
