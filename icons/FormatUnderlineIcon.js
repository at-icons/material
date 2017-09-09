import React from 'react'

const DEFAULT_SIZE = 24

export const FormatUnderlineIcon = ({
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
    <path d="M5,21H19V19H5V21M12,17C15.31,17 18,14.31 18,11V3H15.5V11C15.5,12.93 13.93,14.5 12,14.5C10.07,14.5 8.5,12.93 8.5,11V3H6V11C6,14.31 8.69,17 12,17Z" />
  </svg>
)
