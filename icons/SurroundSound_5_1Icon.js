import React from 'react'

const DEFAULT_SIZE = 24

export const SurroundSound_5_1Icon = ({
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
    <path d="M13,17C12.45,17 12,16.55 12,16C12,15.45 12.45,15 13,15C13.55,15 14,15.45 14,16C14,16.55 13.55,17 13,17M19,7V15H20V17H16V15H17V9H16L17,7H19M6,13C4.9,13 4,12.1 4,11V7H10V9H6V11H8C9.1,11 10,11.9 10,13V15C10,16.1 9.1,17 8,17H4V15H8V13H6Z" />
  </svg>
)
