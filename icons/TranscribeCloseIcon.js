import React from 'react'

const DEFAULT_SIZE = 24

export const TranscribeCloseIcon = ({
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
    <path d="M12,23L8,19H16L12,23M20,3C21.1,3 22,3.9 22,5V15C22,16.1 21.1,17 20,17H4C2.9,17 2,16.1 2,15V5C2,3.9 2.9,3 4,3H20M18,15V13H12.5L10.5,15H18M6,15H8.5L15.35,8.12C15.55,7.93 15.55,7.61 15.35,7.42L13.59,5.65C13.39,5.45 13.07,5.45 12.88,5.65L6,12.53V15Z" />
  </svg>
)
