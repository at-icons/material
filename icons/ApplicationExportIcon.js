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
    <path d="M8,12H17.76L15.26,9.5L16.67,8.08L21.59,13L16.67,17.92L15.26,16.5L17.76,14H8V12M19,3C20.11,3 21,3.9 21,5V9.67L19,7.67V7H5V19H19V18.33L21,16.33V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19Z" />
  </svg>
)
