import React from 'react'

const DEFAULT_SIZE = 24

export const ViewArrayIcon = ({
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
    <path d="M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z" />
  </svg>
)
