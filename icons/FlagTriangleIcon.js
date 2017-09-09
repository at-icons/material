import React from 'react'

const DEFAULT_SIZE = 24

export const FlagTriangleIcon = ({
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
    <path d="M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z" />
  </svg>
)
