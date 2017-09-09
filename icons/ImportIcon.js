import React from 'react'

const DEFAULT_SIZE = 24

export const ImportIcon = ({
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
    <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6C4.9,4 4,4.9 4,6V9H6V6H18V18H6V15H4V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18Z" />
  </svg>
)
