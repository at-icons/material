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
    <path d="M3,4H21C21.55,4 22,4.45 22,5V16C22,16.55 21.55,17 21,17H22L24,20V21H0V20L2,17H3C2.45,17 2,16.55 2,16V5C2,4.45 2.45,4 3,4M4,6V15H20V6H4Z" />
  </svg>
)
