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
    <path d="M4.38,20.9C3.78,20.71 3.3,20.23 3.1,19.63L19.63,3.1C20.23,3.3 20.71,3.78 20.9,4.38L4.38,20.9M20,16V18H13V16H20M3,6H6V3H8V6H11V8H8V11H6V8H3V6Z" />
  </svg>
)
