import React from 'react'

const DEFAULT_SIZE = 24

export const FormatHorizontalAlignLeftIcon = ({
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
    <path d="M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z" />
  </svg>
)
