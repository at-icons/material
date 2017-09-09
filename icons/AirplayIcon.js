import React from 'react'

const DEFAULT_SIZE = 24

export const AirplayIcon = ({
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
    <path d="M6,22H18L12,16M21,3H3C1.9,3 1,3.9 1,5V17C1,18.1 1.9,19 3,19H7V17H3V5H21V17H17V19H21C22.1,19 23,18.1 23,17V5C23,3.9 22.1,3 21,3Z" />
  </svg>
)
