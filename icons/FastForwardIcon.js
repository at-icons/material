import React from 'react'

const DEFAULT_SIZE = 24

export const FastForwardIcon = ({
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
    <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" />
  </svg>
)
