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
    <path d="M11,12C11,14.5 9,16.5 6.5,16.5C4,16.5 2,14.5 2,12C2,9.5 4,7.5 6.5,7.5C9,7.5 11,9.5 11,12M17.5,7.5C15,7.5 13,9.5 13,12C13,14.5 15,16.5 17.5,16.5C20,16.5 22,14.5 22,12C22,9.5 20,7.5 17.5,7.5Z" />
  </svg>
)
