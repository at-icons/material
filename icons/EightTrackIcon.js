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
    <path d="M7,2L5,5V16L6,20C6.27,21.07 6.9,22 8,22H16C17.1,22 18,21.1 18,20L19,16V5L17,2H15V3H13V2H7M7,6H17V16H7V6Z" />
  </svg>
)
