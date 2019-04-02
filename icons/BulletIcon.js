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
    <path d="M14,22H10V21H14V22M13,10V7H11V10L10,11.5V20H14V11.5L13,10M12,2C12,2 11,3 11,5V6H13V5C13,5 13,3 12,2Z" />
  </svg>
)
