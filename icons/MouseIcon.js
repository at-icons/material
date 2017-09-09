import React from 'react'

const DEFAULT_SIZE = 24

export const MouseIcon = ({
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
    <path d="M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z" />
  </svg>
)
