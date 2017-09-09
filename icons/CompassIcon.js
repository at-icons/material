import React from 'react'

const DEFAULT_SIZE = 24

export const CompassIcon = ({
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
    <path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,10.9C11.39,10.9 10.9,11.39 10.9,12C10.9,12.61 11.39,13.1 12,13.1C12.61,13.1 13.1,12.61 13.1,12C13.1,11.39 12.61,10.9 12,10.9Z" />
  </svg>
)
