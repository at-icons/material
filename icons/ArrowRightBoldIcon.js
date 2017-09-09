import React from 'react'

const DEFAULT_SIZE = 24

export const ArrowRightBoldIcon = ({
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
    <path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" />
  </svg>
)
