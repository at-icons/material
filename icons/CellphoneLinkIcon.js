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
    <path d="M22,17H18V10H22M23,8H17C16.45,8 16,8.45 16,9V19C16,19.55 16.45,20 17,20H23C23.55,20 24,19.55 24,19V9C24,8.45 23.55,8 23,8M4,6H22V4H4C2.9,4 2,4.9 2,6V17H0V20H14V17H4V6Z" />
  </svg>
)
