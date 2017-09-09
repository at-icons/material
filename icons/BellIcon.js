import React from 'react'

const DEFAULT_SIZE = 24

export const BellIcon = ({
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
    <path d="M14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20H14M12,2C12.55,2 13,2.45 13,3V4.08C15.84,4.56 18,7.03 18,10V16L21,19H3L6,16V10C6,7.03 8.16,4.56 11,4.08V3C11,2.45 11.45,2 12,2Z" />
  </svg>
)
