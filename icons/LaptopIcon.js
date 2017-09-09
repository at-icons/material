import React from 'react'

const DEFAULT_SIZE = 24

export const LaptopIcon = ({
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
    <path d="M4,6H20V16H4M20,18C21.1,18 22,17.1 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16C2,17.1 2.9,18 4,18H0V20H24V18H20Z" />
  </svg>
)
