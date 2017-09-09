import React from 'react'

const DEFAULT_SIZE = 24

export const ExclamationIcon = ({
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
    <path d="M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z" />
  </svg>
)
