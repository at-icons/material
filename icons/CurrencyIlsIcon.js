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
    <path d="M22,16C22,18.76 19.76,21 17,21H8V9H10V19H17C18.66,19 20,17.66 20,16V3H22V16M16,8V15H14V8C14,6.34 12.66,5 11,5H4V21H2V3H11C13.76,3 16,5.24 16,8Z" />
  </svg>
)
