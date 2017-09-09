import React from 'react'

const DEFAULT_SIZE = 24

export const FormatSizeIcon = ({
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
    <path d="M3,12H6V19H9V12H12V9H3M9,4V7H14V19H17V7H22V4H9Z" />
  </svg>
)
