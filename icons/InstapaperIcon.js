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
    <path d="M10,5C10,4.45 9.55,4 9,4H8V2H16V4H15C14.45,4 14,4.45 14,5V19C14,19.55 14.45,20 15,20H16V22H8V20H9C9.55,20 10,19.55 10,19V5Z" />
  </svg>
)
