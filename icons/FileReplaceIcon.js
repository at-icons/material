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
    <path d="M14,12H19.5L14,6.5V12M8,5H15L21,11V21C21,22.1 20.1,23 19,23H8C6.89,23 6,22.1 6,21V18H11V20L15,17L11,14V16H6V7C6,5.9 6.9,5 8,5M13.5,3H4V16H6V18H4C2.9,18 2,17.1 2,16V3C2,1.9 2.9,1 4,1H11.5L13.5,3Z" />
  </svg>
)
