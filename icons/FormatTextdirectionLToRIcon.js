import React from 'react'

const DEFAULT_SIZE = 24

export const FormatTextdirectionLToRIcon = ({
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
    <path d="M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9C6.79,2 5,3.79 5,6C5,8.21 6.79,10 9,10Z" />
  </svg>
)
