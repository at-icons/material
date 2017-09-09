import React from 'react'

const DEFAULT_SIZE = 24

export const MusicNoteEighthIcon = ({
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
    <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8.54,12 6.9,13.26 6.28,15H3V18H6.28C6.9,19.74 8.54,21 10.5,21C12.46,21 14.1,19.74 14.72,18H19V15H15V6H19V3H12Z" />
  </svg>
)
