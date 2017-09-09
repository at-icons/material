import React from 'react'

const DEFAULT_SIZE = 24

export const AppleKeyboardOptionIcon = ({
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
    <path d="M3,4H9.11L16.15,18H21V20H14.88L7.84,6H3V4M14,4H21V6H14V4Z" />
  </svg>
)
