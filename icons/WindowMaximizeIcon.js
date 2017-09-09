import React from 'react'

const DEFAULT_SIZE = 24

export const WindowMaximizeIcon = ({
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
    <path d="M4,4H20V20H4V4M6,8V18H18V8H6Z" />
  </svg>
)
