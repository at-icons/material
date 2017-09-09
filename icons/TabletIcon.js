import React from 'react'

const DEFAULT_SIZE = 24

export const TabletIcon = ({
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
    <path d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H21C22.1,20 23,19.1 23,18V6C23,4.89 22.1,4 21,4Z" />
  </svg>
)
