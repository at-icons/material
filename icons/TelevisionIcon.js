import React from 'react'

const DEFAULT_SIZE = 24

export const TelevisionIcon = ({
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
    <path d="M20,17H4V5H20M20,3H4C2.89,3 2,3.89 2,5V17C2,18.1 2.9,19 4,19H8V21H16V19H20C21.1,19 22,18.1 22,17V5C22,3.89 21.1,3 20,3Z" />
  </svg>
)
