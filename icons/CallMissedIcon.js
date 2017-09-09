import React from 'react'

const DEFAULT_SIZE = 24

export const CallMissedIcon = ({
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
    <path d="M19.59,7L12,14.59L6.41,9H11V7H3V15H5V10.41L12,17.41L21,8.41" />
  </svg>
)
