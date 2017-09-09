import React from 'react'

const DEFAULT_SIZE = 24

export const ExportIcon = ({
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
    <path d="M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15C16.1,4 17,4.9 17,6V9H15V6H3V18H15V15H17V18C17,19.1 16.1,20 15,20H3C1.9,20 1,19.1 1,18Z" />
  </svg>
)
