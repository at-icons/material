import React from 'react'

const DEFAULT_SIZE = 24

export const FastForwardOutlineIcon = ({
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
    <path d="M15,9.9L18,12L15,14.1V9.9M6,9.9L9,12L6,14.1V9.9M13,6V18L21.5,12L13,6M4,6V18L12.5,12L4,6Z" />
  </svg>
)
