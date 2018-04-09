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
    <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
  </svg>
)
