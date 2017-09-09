import React from 'react'

const DEFAULT_SIZE = 24

export const ViewHeadlineIcon = ({
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
    <path d="M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z" />
  </svg>
)
