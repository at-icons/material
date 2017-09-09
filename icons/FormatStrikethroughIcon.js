import React from 'react'

const DEFAULT_SIZE = 24

export const FormatStrikethroughIcon = ({
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
    <path d="M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z" />
  </svg>
)
