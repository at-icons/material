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
    <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M11.24,6H19V8H12.76L10,18H8L6.25,12H5V10H7.75L9,14.28L11.24,6V6M14,10.59L15.79,12.38L17.59,10.59L19,12L17.21,13.79L19,15.59L17.59,17L15.79,15.21L14,17L12.59,15.59L14.38,13.79L12.59,12L14,10.59Z" />
  </svg>
)
