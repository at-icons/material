import React from 'react'

const DEFAULT_SIZE = 24

export const ArrowDownCircleIcon = ({
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
    <path d="M12,7V15.25L15.25,12L16,12.66L11.5,17.16L7,12.66L7.75,12L11,15.25V7H12M11.5,22C6.26,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22M11.5,21C16.2,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21Z" />
  </svg>
)
