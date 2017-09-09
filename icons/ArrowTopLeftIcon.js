import React from 'react'

const DEFAULT_SIZE = 24

export const ArrowTopLeftIcon = ({
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
    <path d="M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z" />
  </svg>
)
