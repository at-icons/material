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
    <path d="M19,16V6H22V16H19M12,4C8,4 7,4 7,4C7,4 2,4 2,8V14C2,15.77 3,16.76 4.07,17.31C4.4,15.43 6.03,14 8,14H11V16H8C6.9,16 6,16.9 6,18C6,19.11 6.9,20 8,20H13C17,20 17,16 17,16V6C17,6 16,4 12,4Z" />
  </svg>
)
