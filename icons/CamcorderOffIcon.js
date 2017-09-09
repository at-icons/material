import React from 'react'

const DEFAULT_SIZE = 24

export const CamcorderOffIcon = ({
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
    <path d="M3.27,2L2,3.27L4.73,6H4C3.45,6 3,6.45 3,7V17C3,17.55 3.45,18 4,18H16C16.2,18 16.39,17.92 16.54,17.82L19.73,21L21,19.73M21,6.5L17,10.5V7C17,6.45 16.55,6 16,6H9.82L21,17.18V6.5Z" />
  </svg>
)
