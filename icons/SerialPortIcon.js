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
    <path d="M7,3H17V5H19V8H16V14H8V8H5V5H7V3M17,9H19V14H17V9M11,15H13V22H11V15M5,9H7V14H5V9Z" />
  </svg>
)
