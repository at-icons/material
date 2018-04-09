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
    <path d="M3.5,3H9.5L7.96,5.32C9.16,5.87 10,7.09 10,8.5C10,11.54 12.46,14 15.5,14C16.91,14 18.13,14.84 18.68,16.04L21,14.5V20.5L18.68,18.96C18.13,20.16 16.91,21 15.5,21C8.6,21 3,15.4 3,8.5C3,7.09 3.84,5.87 5.04,5.32L3.5,3Z" />
  </svg>
)
