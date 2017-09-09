import React from 'react'

const DEFAULT_SIZE = 24

export const SkipBackwardIcon = ({
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
    <path d="M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12" />
  </svg>
)
