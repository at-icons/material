import React from 'react'

const DEFAULT_SIZE = 24

export const ViewColumnIcon = ({
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
    <path d="M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z" />
  </svg>
)
