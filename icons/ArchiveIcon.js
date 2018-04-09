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
    <path d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11C9.22,11 9,11.22 9,11.5V13H15V11.5C15,11.22 14.78,11 14.5,11H9.5Z" />
  </svg>
)
