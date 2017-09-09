import React from 'react'

const DEFAULT_SIZE = 24

export const BingIcon = ({
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
    <path d="M5,3V19L8.72,21L18,15.82V11.73H18L9.77,8.95L11.38,12.84L13.94,14L8.7,16.92V4.27L5,3" />
  </svg>
)
