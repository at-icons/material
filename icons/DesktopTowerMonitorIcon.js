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
    <path d="M22,18H17C16.45,18 16,17.55 16,17V7C16,6.45 16.45,6 17,6H22C22.55,6 23,6.45 23,7V17C23,17.55 22.55,18 22,18M22,8H17V9H22V8M22,10H17V11H22V10M9,15V17H10V18H5V17H6V15H2C1.45,15 1,14.55 1,14V7C1,6.45 1.45,6 2,6H13C13.55,6 14,6.45 14,7V14C14,14.55 13.55,15 13,15H9M12,8H3V13H12V8Z" />
  </svg>
)
