import React from 'react'

const DEFAULT_SIZE = 24

export const LampIcon = ({
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
    <path d="M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z" />
  </svg>
)
