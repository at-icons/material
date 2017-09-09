import React from 'react'

const DEFAULT_SIZE = 24

export const PlayPauseIcon = ({
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
    <path d="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5" />
  </svg>
)
