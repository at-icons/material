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
    <path d="M22,2V5H2V2H22M2,8H7L9,10H10V20C10,21.1 10.9,22 12,22C13.1,22 14,21.1 14,20V10H15L17,8H22V6H2V8Z" />
  </svg>
)
