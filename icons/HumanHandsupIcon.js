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
    <path d="M5,1C5,3.7 6.56,6.16 9,7.32V22H11V15H13V22H15V7.31C17.44,6.16 19,3.7 19,1H17C17,3.76 14.76,6 12,6C9.24,6 7,3.76 7,1M12,1C10.89,1 10,1.89 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3C14,1.89 13.11,1 12,1Z" />
  </svg>
)
