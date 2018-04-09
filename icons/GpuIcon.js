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
    <path d="M2,7V8.5H3V17H4.5V7C3.7,7 2.8,7 2,7M6,7V7L6,16H7V17H14V16H22V7H6M17.5,9C18.88,9 20,10.12 20,11.5C20,12.88 18.88,14 17.5,14C16.12,14 15,12.88 15,11.5C15,10.12 16.12,9 17.5,9Z" />
  </svg>
)
