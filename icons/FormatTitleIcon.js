import React from 'react'

const DEFAULT_SIZE = 24

export const FormatTitleIcon = ({
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
    <path d="M5,4V7H10.5V19H13.5V7H19V4H5Z" />
  </svg>
)
