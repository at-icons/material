import React from 'react'

const DEFAULT_SIZE = 24

export const WaterIcon = ({
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
    <path d="M12,20C8.69,20 6,17.31 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14C18,17.31 15.31,20 12,20Z" />
  </svg>
)
