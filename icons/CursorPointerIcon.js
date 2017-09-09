import React from 'react'

const DEFAULT_SIZE = 24

export const CursorPointerIcon = ({
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
    <path d="M10,2C11.1,2 12,2.9 12,4V8.5C12,8.5 14,8.25 14,9.25C14,9.25 16,9 16,10C16,10 18,9.75 18,10.75C18,10.75 20,10.5 20,11.5V15C20,16 17,21 17,22H9C9,22 7,15 4,13C4,13 3,7 8,12V4C8,2.9 8.9,2 10,2Z" />
  </svg>
)
