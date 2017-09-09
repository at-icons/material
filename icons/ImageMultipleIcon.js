import React from 'react'

const DEFAULT_SIZE = 24

export const ImageMultipleIcon = ({
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
    <path d="M22,16V4C22,2.9 21.1,2 20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20C2,21.1 2.9,22 4,22H18V20H4V6" />
  </svg>
)
