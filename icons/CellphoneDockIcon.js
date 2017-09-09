import React from 'react'

const DEFAULT_SIZE = 24

export const CellphoneDockIcon = ({
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
    <path d="M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17C6,18.1 6.9,19 8,19H16C17.1,19 18,18.1 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z" />
  </svg>
)
