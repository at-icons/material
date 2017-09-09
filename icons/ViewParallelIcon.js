import React from 'react'

const DEFAULT_SIZE = 24

export const ViewParallelIcon = ({
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
    <path d="M4,21V3H8V21H4M10,21V3H14V21H10M16,21V3H20V21H16Z" />
  </svg>
)
