import React from 'react'

const DEFAULT_SIZE = 24

export const PowerIcon = ({
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
    <path d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12C18,15.31 15.31,18 12,18C8.69,18 6,15.31 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13" />
  </svg>
)
