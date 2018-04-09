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
    <path d="M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16C1,17.1 1.9,18 3,18H10L8,21V22H16V21L14,18H21C22.1,18 23,17.1 23,16V4C23,2.89 22.1,2 21,2Z" />
  </svg>
)
