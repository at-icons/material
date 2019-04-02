import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M4,2C2.9,2 2,2.9 2,4V16C2,17.11 2.9,18 4,18H8V21C8,21.55 8.45,22 9,22H9.5V22C9.75,22 10,21.9 10.2,21.71L13.9,18H20C21.11,18 22,17.11 22,16V4C22,2.89 21.1,2 20,2H4M4,4H20V16H13.08L10,19.08V16H4V4M8,9.05V11.12H12.64L10.84,12.92L12.09,14.17L16.17,10.08L12.09,6L10.84,7.25L12.64,9.05H8Z" />
  </svg>
)
