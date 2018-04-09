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
    <path d="M13.9,7.5C13.9,6.8 14.1,6.3 14.2,6H14.8L15.7,3.5H16.5V2H7.5V3.5H8.3L9.2,6H9.8C10,6.3 10.1,6.8 10.1,7.5C10.1,8.8 6,13.7 6,17.6V19.6C6,21 8.7,21.9 12,21.9C15.3,21.9 18,21 18,19.6V17.6C18,13.7 13.9,8.8 13.9,7.5M12,15C10.9,15 10,14.1 10,13C10,11.9 10.9,11 12,11C13.1,11 14,11.9 14,13C14,14.1 13.1,15 12,15Z" />
  </svg>
)
