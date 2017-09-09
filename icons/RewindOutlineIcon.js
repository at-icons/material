import React from 'react'

const DEFAULT_SIZE = 24

export const RewindOutlineIcon = ({
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
    <path d="M10,9.9L7,12L10,14.1V9.9M19,9.9L16,12L19,14.1V9.9M12,6V18L3.5,12L12,6M21,6V18L12.5,12L21,6Z" />
  </svg>
)
