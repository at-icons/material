import React from 'react'

const DEFAULT_SIZE = 24

export const RewindIcon = ({
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
    <path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z" />
  </svg>
)
