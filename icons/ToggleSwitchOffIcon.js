import React from 'react'

const DEFAULT_SIZE = 24

export const ToggleSwitchOffIcon = ({
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
    <path d="M7,7C9.76,7 12,9.24 12,12C12,14.76 9.76,17 7,17C4.24,17 2,14.76 2,12C2,9.24 4.24,7 7,7M20,14H14V10H20C21.1,10 22,10.9 22,12C22,13.1 21.1,14 20,14M7,9C5.34,9 4,10.34 4,12C4,13.66 5.34,15 7,15C8.66,15 10,13.66 10,12C10,10.34 8.66,9 7,9Z" />
  </svg>
)
