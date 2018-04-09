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
    <path d="M17,12V7L12,2V7H7L2,12H7V17L12,22V17H17L22,12H17M12.88,12.88L12,15.53L11.12,12.88L8.47,12L11.12,11.12L12,8.46L12.88,11.11L15.53,12L12.88,12.88Z" />
  </svg>
)
