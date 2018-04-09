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
    <path d="M21.43,2C21.79,2.07 22.03,2.42 22,2.82L21.12,8.7L19.27,21.4C19.2,21.75 18.95,22 18.63,22H5.37C5.05,22 4.8,21.75 4.73,21.4L2.88,8.7L2,2.82C1.97,2.42 2.21,2.07 2.57,2H21.43M14.08,15.26L15.1,8.7H8.9L9.92,15.26H14.08Z" />
  </svg>
)
