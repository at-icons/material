import React from 'react'

const DEFAULT_SIZE = 24

export const SkipForwardIcon = ({
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
    <path d="M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12" />
  </svg>
)
