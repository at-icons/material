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
    <path d="M9,3L3.36,4.9C3.16,4.97 3,5.15 3,5.38V20.5C3,20.78 3.22,21 3.5,21C3.55,21 3.6,21 3.66,20.97L9,18.9L13,20.3V18.3L9,16.9V5L15,7.1V16H21V3.5C21,3.22 20.78,3 20.5,3H20.34L15,5.1L9,3M15,18V20H23V18H15Z" />
  </svg>
)
