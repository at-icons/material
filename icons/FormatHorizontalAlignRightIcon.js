import React from 'react'

const DEFAULT_SIZE = 24

export const FormatHorizontalAlignRightIcon = ({
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
    <path d="M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z" />
  </svg>
)
