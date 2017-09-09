import React from 'react'

const DEFAULT_SIZE = 24

export const TriangleOutlineIcon = ({
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
    <path d="M12,2L1,21H23M12,6L19.53,19H4.47" />
  </svg>
)
