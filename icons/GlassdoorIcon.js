import React from 'react'

const DEFAULT_SIZE = 24

export const GlassdoorIcon = ({
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
    <path d="M18,6H16V15C16,16 15.82,16.64 15,16.95L9.5,19V6C9.5,5.3 9.74,4.1 11,4.24L18,5V3.79L9,2.11C8.64,2.04 8.36,2 8,2C6.72,2 6,2.78 6,4V20.37C6,21.95 7.37,22.26 8,22L17,18.32C18,17.91 18,17 18,16V6Z" />
  </svg>
)
