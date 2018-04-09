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
    <path d="M10,22C9.45,22 9,21.55 9,21V11C9,9 10,7.25 11,7V2.5C11,2.22 11.22,2 11.5,2H12.5C12.78,2 13,2.22 13,2.5V7C14,7.25 15,9 15,11V21C15,21.55 14.55,22 14,22H10Z" />
  </svg>
)
