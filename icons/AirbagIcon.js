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
    <path d="M14,8C14,10.76 11.76,13 9,13C6.24,13 4,10.76 4,8C4,5.24 6.24,3 9,3C11.76,3 14,5.24 14,8M10.46,15.55L13,18.03L11,18.05L7.5,21.58L6,20.09L10.46,15.55M17,2C18.08,2 19,2.88 19,4C19,5.08 18.12,6 17,6C15.92,6 15,5.12 15,4C15,2.92 15.89,2 17,2M14.41,15H11.59L17.29,20.71L18.71,19.29L14.41,15M15.12,14.29L19.41,18.59L19.63,18.8C19.86,18.42 20,18 20,17.5V9.5C20,8.12 18.88,7 17.5,7C16.12,7 15,8.12 15,9.5V14.17L15.12,14.29Z" />
  </svg>
)
