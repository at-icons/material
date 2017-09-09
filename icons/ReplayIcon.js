import React from 'react'

const DEFAULT_SIZE = 24

export const ReplayIcon = ({
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
    <path d="M12,5V1L7,6L12,11V7C15.31,7 18,9.69 18,13C18,16.31 15.31,19 12,19C8.69,19 6,16.31 6,13H4C4,17.42 7.58,21 12,21C16.42,21 20,17.42 20,13C20,8.58 16.42,5 12,5Z" />
  </svg>
)
