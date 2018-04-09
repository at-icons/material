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
    <path d="M12,3C9.79,3 8,4.79 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7C16,4.79 14.21,3 12,3Z" />
  </svg>
)
