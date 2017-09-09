import React from 'react'

const DEFAULT_SIZE = 24

export const DetailsIcon = ({
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
    <path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z" />
  </svg>
)
