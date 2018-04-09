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
    <path d="M16,9V11H8V9H10V8H4V10H2V2H4V4H12C13.1,4 14,4.9 14,6V9H16M10,15V18C10,19.1 10.9,20 12,20H20V22H22V14H20V16H14V15H16V13H8V15H10Z" />
  </svg>
)
